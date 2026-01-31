import {inject, Injectable, signal} from '@angular/core';
import {ApiResponse, ApiService} from '../../../shared/api';
import {PublicationListDto} from '../data/dto/publication-list.dto';
import {tap} from 'rxjs';
import {CreatePublicationPayload} from '../data/payload/create-publication.payload';


@Injectable({ providedIn: 'root'})
export class PublicationService {

  private readonly api: ApiService = inject(ApiService);

  private _publicationList = signal<PublicationListDto[] | null>(null);
  publicationList = this._publicationList.asReadonly();

  getPublications(){
    return this.api.get('publication/all')
      .pipe(
        tap((response: ApiResponse) => {
          this._publicationList.set(response.data);
          console.log(response)
        })
      )
  }

  createPublication(payload: CreatePublicationPayload) {
    return this.api.post('publication/create', payload);
  }

}
