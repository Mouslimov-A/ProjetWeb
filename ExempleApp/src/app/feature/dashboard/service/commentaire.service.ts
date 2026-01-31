import {inject, Injectable, signal} from '@angular/core';
import {ApiResponse, ApiService} from '../../../shared/api';
import {tap} from 'rxjs';
import {CommentaireListDto} from '../data/dto/commentaire-list.dto';
import {CreateCommentairePayload} from '../data/payload/create-commentaire.payload';
import {UpdateCommentairePayload} from '../data/payload/update-commentaire.payload';

@Injectable({ providedIn: 'root'})
export class CommentaireService {

  private readonly api: ApiService = inject(ApiService);

  private _commentaireList = signal<CommentaireListDto[] | null>(null);
  commentaireList = this._commentaireList.asReadonly();

  getCommentairesByPublication(idPublication: number) {
    return this.api.get(`commentaire/publication/${idPublication}`)
      .pipe(
        tap((response: ApiResponse) => {
          this._commentaireList.set(response.data);
          console.log(response);
        })
      );
  }

  createCommentaire(idPublication: number, payload: CreateCommentairePayload) {
    return this.api.post(`commentaire/create/${idPublication}`, payload);
  }


  deleteCommentaire(idCommentaire: number) {
    return this.api.delete(`commentaire/delete/${idCommentaire}`);
  }
}
