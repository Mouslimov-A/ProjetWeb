import {environment} from '../../../../environments/environment.development';
import {effect, EffectRef, Injectable, signal, WritableSignal} from '@angular/core';
import {Token} from '../data';
import { isNil } from "lodash";


@Injectable({providedIn: 'root'})
export class TokenService {
  token$: WritableSignal<Token> = signal(this.getToken());
  private readonly tokenSaveHandler: EffectRef = effect(() => this.handleTokenChange(this.token$()));

  public setToken(token: Token): void {
    if (token.token.trim().length > 0) {
      this.token$.set(token);
    } else {
      this.token$.set(this.getEmpty());
      localStorage.removeItem(environment.TOKEN_KEY);
    }
  }

  private handleTokenChange(token: Token): void {
    if (token.token.trim().length > 0) {
      localStorage.setItem(environment.TOKEN_KEY, JSON.stringify(token));
    } else {
      localStorage.removeItem(environment.TOKEN_KEY);
    }
  }

  private getToken(): Token {
    const str = localStorage.getItem(environment.TOKEN_KEY);

    if (!isNil(str)) {
      const parsedToken = JSON.parse(str);
      return { ...parsedToken, isEmpty: false } as Token;
    }
    return this.getEmpty();
  }

  private getEmpty(): Token {
    return { token: '', refreshToken: '', isEmpty: true };
  }
}
