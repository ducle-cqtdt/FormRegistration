import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {passwordMatch} from "../custom-validator.validator";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  }

  showPassword = false;
  formAcc = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    address: ['', Validators.required],
    password: ['', Validators.required],
    confirm: [''],
  },
    {
      validators: [passwordMatch],
      updateOn: 'change'
    })
  contextFirstName = {
    controlName: 'firstName',
    labelName: 'First Name',
    maxLength: 30,
    type: 'text',
    isRequired: true
  };
  contextLastName = {
    controlName: 'lastName',
    labelName: 'Last Name',
    maxLength: 30,
    type: 'text',
    isRequired: true
  };
  contextEmail = {
    controlName: 'email',
    labelName: 'Email',
    maxLength: 50,
    type: 'text',
    isRequired: true
  };
  contextPhone = {
    controlName: 'phone',
    labelName: 'Phone',
    maxLength: 10,
    type: 'text',
    isRequired: true
  };
  contextAddress = {
    controlName: 'address',
    labelName: 'Address',
    maxLength: 100,
    type: 'text',
    isRequired: true
  };
  contextPassword = {
    controlName: 'password',
    labelName: 'Password',
    maxLength: 30,
    type: 'password',
    isRequired: true
  };
  contextConfirm = {
    controlName: 'confirm',
    labelName: 'Confirm',
    maxLength: 30,
    type: 'password',
    isRequired: false
  };

  ngOnInit(): void {

  }

  togglePassword(){
    this.showPassword = !this.showPassword;
    const inputType = this.showPassword ? 'text' : 'password';
    this.contextPassword.type = inputType;
    this.contextConfirm.type = inputType;
  }

}
