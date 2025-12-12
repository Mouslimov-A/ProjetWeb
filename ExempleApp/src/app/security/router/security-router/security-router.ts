import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {MemberService} from '../../../feature/member/service/member.service';
import {tap} from 'rxjs';
import {JsonPipe} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-security-router',
  imports: [
    JsonPipe,
    RouterOutlet
  ],
  templateUrl: './security-router.html',
  standalone: true,
  styleUrl: './security-router.scss',
})

export class SecurityRouter implements OnInit {
  memberService: MemberService = inject(MemberService);
  profiles$: WritableSignal<any[]> = signal([]);

  ngOnInit(): void {
    this.memberService.getList() // Observable<any>
      .pipe(
        tap((profiles: any[])=> {
          this.profiles$.set(profiles);
        })
      )
      .subscribe();
  }
}
