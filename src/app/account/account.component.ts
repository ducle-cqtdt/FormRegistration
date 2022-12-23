import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(private fb: FormBuilder) {
  }

  formAcc = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    password: ['', Validators.required],
    confirm: ['', Validators.required],
  })
  contextFirstName = {
    controlName: 'firstName',
    labelName: 'First Name',
    maxLength: 30,
    isFullWidth: false
  };
  contextLastName = {
    controlName: 'lastName',
    labelName: 'Last Name',
    maxLength: 30,
    isFullWidth: false
  };
  contextEmail = {
    controlName: 'email',
    labelName: 'Email',
    maxLength: 50,
    isFullWidth: true
  };
  contextPhone = {
    controlName: 'phone',
    labelName: 'Phone',
    maxLength: 10,
    isFullWidth: false
  };
  contextAddress = {
    controlName: 'address',
    labelName: 'Address',
    maxLength: 100,
    isFullWidth: false
  };
  contextPassword = {
    controlName: 'password',
    labelName: 'Password',
    maxLength: 30,
    isFullWidth: false
  };
  contextConfirm = {
    controlName: 'confirm',
    labelName: 'Confirm',
    maxLength: 30,
    isFullWidth: false
  };

  ngOnInit(): void {

  }

}
