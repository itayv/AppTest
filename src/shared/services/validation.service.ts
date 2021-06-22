import { Injectable } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

//https://coryrylan.com/blog/angular-form-builder-and-validation-management

@Injectable()
export class ValidationService {

    static emailValidator(control:FormControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/^$|[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    getErrorMsg(fc:AbstractControl | null): string {
        if (fc!.invalid) {
          if (fc!.errors!.required) {
            return 'שדה חובה';
          }
          if(fc!.errors!.invalidEmailAddress) {
              return 'דוא"ל לא תקין';
          }
        }
        return '';
      }
}
