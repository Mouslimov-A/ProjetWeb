import {ApiResponse, ApiService, ApiURI, APIURIPublic, TokenService} from '../../shared/api';
import {computed, effect, EffectRef, inject, Injectable, signal, Signal, WritableSignal} from '@angular/core';
import {Router} from '@angular/router';
import {SignInPayload, SignUpPayload} from '../data';
import {Observable, tap} from 'rxjs';
import {AppNode} from '../../shared/ui/app.node';
import {CredentialUtilService} from '../util/credential.util';
import {Credential} from '../data/credential.business';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);
  isAuthenticated$: Signal<boolean> = computed(() => !this.tokenService.token$().isEmpty);
  accounts$: WritableSignal<Credential> = signal(CredentialUtilService.getEmpty());
  private readonly isAuthenticatedHandler = effect(() => this.handleAuthenticatedChange(this.isAuthenticated$()));
  private readonly router: Router = inject(Router);

  signIn(payload: SignInPayload): Observable<ApiResponse> {
    return this.api.post(APIURIPublic.SIGN_IN,{...payload}).pipe(
      tap(  (response: ApiResponse)=> {
        // if success then goToDashboard and save token
        if (response.result) {
          this.tokenService.setToken({...response.data, isEmpty: false});
        }
      }),
    );
  }

  signUp(payload: SignUpPayload): Observable<ApiResponse> {
    return this.api.post(APIURIPublic.SIGN_UP, {...payload, socialLogin: false}).pipe(
      tap( (response: ApiResponse)=> {
      // if success then goToDashboard and save token
      if (response.result) {
        this.router.navigate( [AppNode.REDIRECT_TO_PUBLIC]).then();
        }
      }),
    );
  }

  public logout(): void {
    this.tokenService.setToken({token: '', refreshToken: '', isEmpty: true});
    this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]);
  }

  private handleAuthenticatedChange(isAuthenticated: boolean): void {
    console.log('response', this.tokenService.token$());
    if (isAuthenticated) {
      this.api.get(ApiURI.ME)
        .pipe(tap((response: ApiResponse) => {
          if (response.result) {
            this.accounts$.set(CredentialUtilService.fromDTO(response.data));
            console.log("response AUTH: " + this.accounts$().username);
            if (!window.location.pathname.startsWith('/' + AppNode.REDIRECT_TO_AUTHENTICATED)) {
              this.router.navigate([AppNode.REDIRECT_TO_AUTHENTICATED]).then();
            }
          } else {
            this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
          }
        }))
        .subscribe();
    } else {
      this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
    }
  }
} // (La fermeture de la classe est déduite)
