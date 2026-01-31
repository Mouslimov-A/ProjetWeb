import {inject, Injectable, signal} from '@angular/core';
import {ApiResponse, ApiService} from '../../../shared/api';
import {tap} from 'rxjs';
import {MessageDto} from '../data/dto/message-list.dto';
import {CreateMessagePayload} from '../data/payload/create-message.payload';

@Injectable({ providedIn: 'root'})
export class MessageService {

  private readonly api: ApiService = inject(ApiService);

  private _messageList = signal<MessageDto[] | null>(null);
  messageList = this._messageList.asReadonly();

  getMessagesByConversation(conversationId: string) {
    return this.api.get(`conversation/${conversationId}/messages`)
      .pipe(
        tap((response: ApiResponse) => {
          // Extraire les messages de la conversation
          this._messageList.set(response.data.messages || []);
          console.log(response);
        })
      );
  }

  sendMessage(conversationId: number, payload: CreateMessagePayload) {
    return this.api.post(`message/send/${conversationId}`, payload);
  }
}
