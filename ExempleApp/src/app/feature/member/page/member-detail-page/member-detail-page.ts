import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-member-detail-page',
  imports: [],
  templateUrl: './member-detail-page.html',
  standalone: true,
  styleUrl: './member-detail-page.scss',
})
export class MemberDetailPage implements OnInit {
  @Input() id!: string;

  ngOnInit(): void {
    console.log('this.id = ', this.id);
  }


}
