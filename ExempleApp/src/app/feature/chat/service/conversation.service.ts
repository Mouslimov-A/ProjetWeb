import {inject, Injectable, signal} from '@angular/core';
import {ApiResponse, ApiService} from '../../../shared/api';
import {tap} from 'rxjs';
import {ConversationListDto} from '../data/dto/conversation-list.dto';

@Injectable({ providedIn: 'root'})
export class ConversationService {

  private readonly api: ApiService = inject(ApiService);

  private _conversationList = signal<ConversationListDto[] | null>(null);
  conversationList = this._conversationList.asReadonly();

  getMyConversations() {
    return this.api.get('conversation/all')
      .pipe(
        tap((response: ApiResponse) => {
          this._conversationList.set(response.data);
          console.log(response);
        })
      );
  }

  createConversation(idUser2: string) {
    return this.api.post(`conversation/create/${idUser2}`, {});
  }
}
