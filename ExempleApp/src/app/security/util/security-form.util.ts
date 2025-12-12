import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignInPayload, SignUpPayload} from '../data';
import {FloatInputConfig} from '../../shared/ui/form/model/float-input.config';

export class SecurityFormUtil {
  static getDefaultSignInPayload(): SignInPayload {
    return {username:'', password:''}
  }

  static getDefaultSignUpPayload(): SignUpPayload {
    return {...SecurityFormUtil.getDefaultSignUpPayload(), mail: ''}
  }

  static getDefaultUsernameFormControl(username: string = ''): FormControl {
    return new FormControl(username,
      [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
  }

  static getDefaultPasswordControl(password: string = ''): FormControl {
    return new FormControl(password,
      [Validators.required])
  }

  static getDefaultMailControl(mail: string = ''): FormControl {
    return new FormControl(mail,
      [Validators.required])
  }

  static getSignInFormGroup(payload:SignInPayload = SecurityFormUtil.getDefaultSignInPayload()): FormGroup {
    return new FormGroup<any>({
      username: SecurityFormUtil.getDefaultUsernameFormControl(payload.username),
      password: SecurityFormUtil.getDefaultPasswordControl(payload.password),

    });
  }

  static getSignUpFormGroup(payload:SignUpPayload = SecurityFormUtil.getDefaultSignUpPayload()): FormGroup {
    return new FormGroup<any>({
      username: SecurityFormUtil.getDefaultUsernameFormControl(payload.username),
      password: SecurityFormUtil.getDefaultPasswordControl(payload.password),
      mail: SecurityFormUtil.getDefaultMailControl(payload.mail),
    });
  }
  static getUsernameFloatInputConfig(formGroup: FormGroup): FloatInputConfig {
    return {
      type: 'text',
      label: 'username',
      formControl: formGroup.get('username')! as FormControl
    }
  }
  static getPasswordFloatInputConfig(formGroup: FormGroup): FloatInputConfig {
    return {
      type: 'text',
      label: 'password',
      formControl: formGroup.get('password')! as FormControl
    }
  }
  static getMailFloatInputConfig(formControl: FormControl): FloatInputConfig {
    return {
      type: 'text',
      label: 'mail',
      formControl: formControl
    }
  }
}
