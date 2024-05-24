import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailMask]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailMaskDirective, multi: true }]
})
export class EmailMaskDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const emailRegexp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const valid = emailRegexp.test(control.value);
    return valid ? null : { 'invalidEmail': true };
  }
}
