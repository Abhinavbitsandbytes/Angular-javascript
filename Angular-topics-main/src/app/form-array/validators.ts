import { AbstractControl, ValidatorFn } from '@angular/forms';

export function uniqueNameValidator(formArray: AbstractControl[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const nameValues = formArray
            .map((formGroup) => formGroup.get('name')?.value)
            .filter((value) => value === control.value);

        if (nameValues.length > 1) {
            return { duplicateName: true };
        }

        return null;
    };
}
