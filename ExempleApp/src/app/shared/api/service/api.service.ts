import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseURL: string = environment.apiURL;
  private readonly http: HttpClient = inject(HttpClient);

  get(partURL: string): Observable<any> {
    return this.http.get(`${this.baseURL}${partURL}`);
  }

  post(partURL: string, payload: any): Observable<any> {
    return this.http.post(`${this.baseURL}${partURL}`, payload);
  }

  put(partURL: string, payload: any): Observable<any> {
    return this.http.put(`${this.baseURL}${partURL}`, payload);
  }

  delete(partURL: string): Observable<any> {
    return this.http.delete(`${this.baseURL}${partURL}`);
  }
}
