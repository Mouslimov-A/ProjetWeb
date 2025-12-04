import { Component, signal } from '@angular/core';
import {SignInPage} from '../security/page/sign-in-page/sign-in-page';


@Component({
  selector: 'app-root',
  imports: [SignInPage],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ExempleApp');
}
