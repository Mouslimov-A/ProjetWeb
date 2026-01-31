import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../../shared/api';

@Injectable({ providedIn: 'root'})
export class LikeService {

  private readonly api: ApiService = inject(ApiService);

  addLike(idPublication: number) {
    return this.api.post(`like/add/${idPublication}`, {});
  }

  getLikeCount(idPublication: number) {
    return this.api.get(`like/count/${idPublication}`);
  }
}
