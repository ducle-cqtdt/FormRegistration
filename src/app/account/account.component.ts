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
    labelName: 'First Name'
  };

  ngOnInit(): void {

  }

}
