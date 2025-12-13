import {FormError, GetAllFormErrorsFn, HandleValueChangeFn} from '../type';
import {FormGroup, ValidationErrors} from '@angular/forms';
import {WritableSignal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {map, tap} from 'rxjs';


export const getFormValidationErrors: GetAllFormErrorsFn = (form: FormGroup): FormError[] => {

  const result: FormError[] = [];
  Object.keys(form.controls).forEach(key => {
    const controlErrors: ValidationErrors | null = form.get(key)!.errors;
    if(controlErrors) {
      Object.keys(controlErrors).forEach(error => {
        result.push({
          control: key,
          error,
          value: controlErrors[error],
        })
      })
    }
  })

  return result;
}

export const handleFormError: HandleValueChangeFn = (form:FormGroup, signal: WritableSignal<FormError[]>): void => {
  form.valueChanges.pipe(
    takeUntilDestroyed(),
    map( ()=> getFormValidationErrors(form)),
    tap( (errors:FormError[])=> signal.set(errors))
  ).subscribe();
}
