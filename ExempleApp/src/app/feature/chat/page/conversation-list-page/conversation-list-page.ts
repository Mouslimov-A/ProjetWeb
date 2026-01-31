import {ConversationListDto} from '../../data/dto/conversation-list.dto';
import {Component, inject, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ConversationService} from '../../service/conversation.service';
import {SecurityService} from '../../../../security/service/security.service';

@Component({
  selector: 'app-conversation-list-page',
  imports: [
    DatePipe,
    RouterLink,
    FormsModule
  ],
  templateUrl: './conversation-list-page.html',
  styleUrl: './conversation-list-page.scss',
})
export class ConversationListPageComponent implements OnInit {

  private conversationService = inject(ConversationService);
  private securityService = inject(SecurityService);
  private router = inject(Router);

  userAccount = this.securityService.accounts$;
  conversationList = this.conversationService.conversationList;

  protected newConversationUsername = '';

  ngOnInit(): void {
    this.conversationService.getMyConversations().subscribe();
  }

  getOtherUser(conversation: ConversationListDto) {
    return conversation.user1.credential_id === this.userAccount().id
      ? conversation.user2
      : conversation.user1;
  }

  onCreateConversation() {
    if (!this.newConversationUsername.trim()) return;

    this.conversationService.createConversation(this.newConversationUsername)
      .subscribe({
        next: (response: any) => {
          this.newConversationUsername = '';
          this.conversationService.getMyConversations().subscribe();
        }
      });
  }
}
