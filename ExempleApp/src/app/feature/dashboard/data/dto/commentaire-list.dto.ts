export interface CommentaireListDto {
  commentaireId: number;
  content: string;
  createdAt: Date;
  credential: {
    username: string;
  };
}
