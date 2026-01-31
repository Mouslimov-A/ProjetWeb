import {Component, inject, input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../service/message.service';
import {SecurityService} from '../../../../security/service/security.service';
import {DatePipe} from '@angular/common';
import {MessageDto} from '../../data/dto/message-list.dto';

@Component({
  selector: 'app-conversation-detail-page',
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './conversation-detail-page.html',
  styleUrl: './conversation-detail-page.scss',
})
export class ConversationDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  private authService = inject(SecurityService); // Pour récupérer l'user connecté

  messageList = this.messageService.messageList;
  currentUserId = this.authService.accounts$()?.id;

  protected newMessageContent = '';

  conversationId = input.required<string>()

  ngOnInit(): void {
    this.messageService.getMessagesByConversation(this.conversationId()).subscribe();
  }

  onSendMessage() {
    if (!this.newMessageContent.trim()) return;

    this.messageService.sendMessage(+this.conversationId(), { content: this.newMessageContent })
      .subscribe({
        next: () => {
          this.newMessageContent = '';
          // Recharger les messages
          this.messageService.getMessagesByConversation(this.conversationId()).subscribe();
        }
      });
  }

  isMyMessage(message: MessageDto): boolean {
    return message.sender.credential_id === this.currentUserId;
  }
}
