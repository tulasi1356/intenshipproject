import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService,private snackbar: MatSnackBar) { }
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
    this.auth.generalsignup(this.signupForm.value).subscribe(
      data => { 
        console.log(data,'datta');
        // this.matter = data;
        this.snackbar.open(data, "ok", { duration: 15000 });
        // this.signupLoader = false;
        // if(data.status){
        // // localStorage.setItem('forward',''); 
        // this.snackbar.open("An account verification mail is sent. Please check.","ok",{duration:20000});
        // this.router.navigate(['/login']);
      }
    );
  }
  gotologin() {
    this.router.navigate(['/login'])
  }

}
