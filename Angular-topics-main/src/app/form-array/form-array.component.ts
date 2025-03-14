import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { uniqueNameValidator } from './validators';
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  formArray: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
    this.addForm();
  }

  addForm() {
    const newForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), uniqueNameValidator(this.formArray)]],
      address: [''],
      food: [''],
    });

    this.formArray.push(newForm);
  }

  removeForm(index: number) {
    this.formArray.splice(index, 1);
  }

  submitForms() {
    this.formArray.forEach((formGroup) => {
      if (formGroup.valid) {
        console.log(formGroup.value);
      } else {
        alert('Please fill out the form correctly');
      }
    });
  }

}
