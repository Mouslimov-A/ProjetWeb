import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from '../../../shared/api/service/api.service';

@Injectable({ providedIn: 'root' })
export class MemberService {
  private api: ApiService = inject(ApiService);

  getList(): Observable<any> {
    return this.api.get('profile/list');
  }
}
