import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';


@Injectable({ providedIn: 'root' })
export class ApiService {

  private readonly baseURL: string = environment.apiURL;

  constructor() {

  }
}
