import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private auth: AuthService,private snackbar: MatSnackBar) { }
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
    })
  ngOnInit(): void {
  }
  showSnackbar(message: string) {
    console.log('snckbar')
    this.snackbar.open(message, "ok", { duration: 15000 });
  }
  Onsubmit() {
    this.auth.generallogin(this.loginForm.value).subscribe(
      data => { 
        console.log(data,'datta');
        if(data === 'password is incorrect') {
          // this.matter = data;
          this.showSnackbar('password is incorrect')
        } else if(data === 'account does not exit') {
          this.showSnackbar('signup first');
        } else {
          console.log('%c T','color:red',data);
          // this.auth.username = data;
          // this.router.navigate(['/home']);
          // this.showSnackbar(data);
          // this.matter = true;
        }
      }
      );
  }
}
