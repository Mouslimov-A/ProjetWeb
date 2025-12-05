import { Component } from '@angular/core';
import { FloatInput } from '../../../shared/ui/form/component/float-input/float-input';
import { FloatInputConfig } from '../../../shared/ui/form/model/float-input.config';

@Component({
  selector: 'app-sign-in-page',
  imports: [
    FloatInput
  ],
  templateUrl: './sign-in-page.html',
  standalone: true,
  styleUrl: './sign-in-page.scss',
})
export class SignInPage {

  protected passwordConfig: FloatInputConfig = {
    type: 'password', label: 'password', defaultValue: ''
  }

  protected usernameConfig: FloatInputConfig = {
    type: 'text', label: 'username', defaultValue: 'm.aslan@gmail.com'
  }

  onClickEvent(event: FloatInputConfig): void {
    console.log('Event reçu du composant enfant :', event);
  }
  onClick(event: MouseEvent): void {
    this.usernameConfig.label = "Nouveau Label";
  }
  changeLabel(event: MouseEvent): void {
    console.log('Bouton cliqué !');

    this.usernameConfig = { ...this.usernameConfig, label: 'Nouvel Email' };
  }
}
// oui
