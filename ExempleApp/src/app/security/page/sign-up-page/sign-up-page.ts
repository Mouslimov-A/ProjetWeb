import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FloatInput} from "../../../shared/ui/form/component/float-input/float-input";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {submit} from '@angular/forms/signals';
import {SecurityService} from '../../service/security.service';
import {SignUpPayload} from '../../data';
import {SecurityFormUtil} from '../../util';
import {FloatInputConfig} from '../../../shared/ui/form/model/float-input.config';
import {FormError} from '../../../shared/ui/form/type';
import {handleFormError} from '../../../shared/ui/form/util';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  imports: [
    FloatInput,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.scss',
})
export class SignUpPage {
  private readonly securityService = inject(SecurityService);


  payload:SignUpPayload = SecurityFormUtil.getDefaultSignUpPayload();
  formGroup: FormGroup = SecurityFormUtil.getSignUpFormGroup();

  usernameFloatInputConfig:FloatInputConfig = SecurityFormUtil.getUsernameFloatInputConfig(this.formGroup);
  mailFloatInputConfig:FloatInputConfig = SecurityFormUtil.getMailFloatInputConfig(this.formGroup);
  passwordFloatInputConfig:FloatInputConfig = SecurityFormUtil.getPasswordFloatInputConfig(this.formGroup);

  errors$: WritableSignal<FormError[]> = signal([]);

  constructor() {
    handleFormError(this.formGroup, this.errors$);
  }

  submit():void{
    if(this.formGroup.invalid){
      console.log('erreur',this.formGroup.value);
      return;
    }
    this.securityService.signUp(this.formGroup.value)
      .subscribe((data) => console.log('data', data));
  }
}
