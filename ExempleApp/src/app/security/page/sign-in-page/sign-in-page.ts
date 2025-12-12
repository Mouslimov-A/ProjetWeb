import { Component } from '@angular/core';

import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {FloatInput} from '../../../shared/ui/form/component/float-input/float-input';
import {SignInPayload} from '../../data';
import {SecurityFormUtil} from '../../util';
import {FloatInputConfig} from '../../../shared/ui/form/model/float-input.config';


@Component({
  selector: 'app-sign-in-page',
  imports: [
    FloatInput,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './sign-in-page.html',
  standalone: true,
  styleUrl: './sign-in-page.scss',
})
export class SignInPage {
  payload:SignInPayload = SecurityFormUtil.getDefaultSignInPayload();
  formGroup: FormGroup = SecurityFormUtil.getSignInFormGroup();
  usernameFloatInputConfig:FloatInputConfig = SecurityFormUtil.getUsernameFloatInputConfig(this.formGroup);
  passwordFloatInputConfig:FloatInputConfig = SecurityFormUtil.getPasswordFloatInputConfig(this.formGroup);


  submit():void{
    if(this.formGroup.invalid){
      console.log('erreur',this.formGroup.value);
      return;
    }
    // go to api
  }

}

