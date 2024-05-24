import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneMaskDirective, multi: true }]
})
export class PhoneMaskDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    const phoneRegexp = /^(89\d{9}|\+79\d{9})$/;
    const valid = phoneRegexp.test(control.value);
    return valid ? null : { 'invalidPhone': true };
  }
}
