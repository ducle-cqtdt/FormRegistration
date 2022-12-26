import {AbstractControl} from "@angular/forms";


export function passwordMatch(c: AbstractControl) {
  return (
    c.get('password')?.value !== c.get('confirm')?.value ? {notMatch: true} : null
  )
}
