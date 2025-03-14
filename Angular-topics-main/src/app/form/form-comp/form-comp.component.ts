import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {
  loginForm! : FormGroup
  roles: string[] = ['Admin', 'User', 'Guest'];
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.maxLength(8)]],
      role: [null, Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    })
  }
  handleSubmit(){
    console.log(this.loginForm)
  }
}
