export interface MessageDto {
  messageId: number;
  content: string;
  createdAt: Date;
  sender: {
    credential_id: string;
    username: string;
  };
}
