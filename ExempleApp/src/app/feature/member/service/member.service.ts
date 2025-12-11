import { inject, Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {ApiService} from '../../../shared/api/service/api.service';
import {ApiResponse} from '../../../shared/api/data/response/api.response';



@Injectable({ providedIn: 'root' })
export class MemberService {
  private api: ApiService = inject(ApiService);

  getList(): Observable<any[]> {
    return this.api.get('profile/list').pipe(
      map((value:ApiResponse)=> value.data)
    );
  }
}
