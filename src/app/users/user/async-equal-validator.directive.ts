import { Directive } from '@angular/core';
import {FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS} from '@angular/forms';
import {nameValidator} from './name-validator.directive';
import {of} from 'rxjs/observable/of';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {delay} from 'rxjs/operators';

@Directive({
  selector: '[appAsyncEqualValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: asyncValidator,
      multi: true
    }
  ]
})
export class AsyncEqualValidatorDirective {

  constructor() { }

}

export function asyncValidator({value}: FormGroup): ValidationErrors | null {
  console.log('FormGroup', value);
  const [password, pconfirm] = Object.keys(value);
  const valid = value[password] === value[pconfirm]
    ? null
    : {
      noequals: true
    };
  return of(valid).pipe(delay(5000));
}
