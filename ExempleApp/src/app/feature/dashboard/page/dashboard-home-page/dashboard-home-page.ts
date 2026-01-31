import {Component, inject, OnInit, signal} from '@angular/core';
import {PublicationService} from '../../service/publication.service';
import {DatePipe} from '@angular/common';
import {CommentaireService} from '../../service/commentaire.service';
import {FormsModule} from '@angular/forms';
import {LikeService} from '../../service/like.service';

@Component({
  selector: 'app-dashboard-home-page',
  imports: [
    DatePipe,
    FormsModule

  ],
  templateUrl: './dashboard-home-page.html',
  standalone: true,
  styleUrl: './dashboard-home-page.scss',
})
export class DashboardHomePage implements OnInit {

  private publicationService = inject(PublicationService);
  private commentaireService = inject(CommentaireService);
  private likeService = inject(LikeService);

  publicationList = this.publicationService.publicationList;
  commentaireList = this.commentaireService.commentaireList;

  protected _selectedPublicationId = signal<number | null>(null);
  protected _newCommentContent = signal<string>('');
  protected _newPublicationContent = signal<string>('');

  ngOnInit(): void {
    this.publicationService.getPublications().subscribe();
  }

  onCreatePublication() {
    const content = this._newPublicationContent();
    if (!content.trim()) return;

    this.publicationService.createPublication({ content })
      .subscribe({
        next: () => {
          this._newPublicationContent.set('');
          // Recharger les publications
          this.publicationService.getPublications().subscribe();
        }
      });
  }

  onShowComments(publicationId: number) {
    if (this._selectedPublicationId() === publicationId) {
      this._selectedPublicationId.set(null);
    } else {
      this._selectedPublicationId.set(publicationId);
      this.commentaireService.getCommentairesByPublication(publicationId).subscribe();
    }
  }

  onCreateComment(publicationId: number) {
    const content = this._newCommentContent();
    if (!content.trim()) return;

    this.commentaireService.createCommentaire(publicationId, { content })
      .subscribe({
        next: () => {
          this._newCommentContent.set('');
          // Recharger les commentaires
          this.commentaireService.getCommentairesByPublication(publicationId).subscribe();
        }
      });
  }

  onDeleteComment(commentaireId: number, publicationId: number) {
    this.commentaireService.deleteCommentaire(commentaireId)
      .subscribe({
        next: () => {
          // Recharger les commentaires
          this.commentaireService.getCommentairesByPublication(publicationId).subscribe();
        }
      });
  }

  onLike(publicationId: number) {
    this.likeService.addLike(publicationId).subscribe({
      next: () => {
        this.publicationService.getPublications().subscribe();
      }
    });
  }
}
