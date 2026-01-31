export interface ConversationListDto {
  conversationId: number;
  createdAt: Date;
  updatedAt: Date;
  user1: {
    credential_id: string;
    username: string;
  };
  user2: {
    credential_id: string;
    username: string;
  };
}
