import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function atLeastOneFieldRequired(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const group = control as any;
    console.log(control)  // it will print the form group with all the form controls
    const controls = group.controls as Record<string, AbstractControl>;

    const hasAnyValue = Object.values(controls).some(
      (ctrl: AbstractControl) => !!ctrl.value
    );

    return hasAnyValue ? null : { atLeastOneRequired: true };
  };
}
