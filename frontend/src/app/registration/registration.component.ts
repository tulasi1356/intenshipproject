import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,) { }
  signupForm = this.fb.group(
    {
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      mobilenumber: ['', [Validators.required, Validators.minLength(10)]],
      dateofbirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required,Validators.minLength(8)]],
  
      
    })
  ngOnInit(): void {
  }
  Onsubmit() {

  }

}
