import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: nameValidator,
      multi: true
    }
  ]

})
export class NameValidatorDirective {

  constructor() {
  }

}


export function nameValidator({value}: FormControl): ValidationErrors | null {
  const valid = /^[a-zA-Z]*$/.test(value);
  return valid
    ? null
    : {nospecial: true};
}
