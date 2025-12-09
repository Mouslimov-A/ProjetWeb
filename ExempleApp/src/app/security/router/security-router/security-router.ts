import {Component,inject, OnInit} from '@angular/core';
import {MemberService} from '../../../feature/member/service/member.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-security-router',
  imports: [],
  templateUrl: './security-router.html',
  standalone: true,
  styleUrl: './security-router.scss',
})

export class SecurityRouter implements OnInit {
  memberService:MemberService = inject(MemberService);

  ngOnInit(): void {
    this.memberService.getList() // Observable<any>
      .pipe(
        tap((profiles: any[]) => {
      this.profiles$.set(profiles);
    })
  )
  .subscribe();
  }
}
