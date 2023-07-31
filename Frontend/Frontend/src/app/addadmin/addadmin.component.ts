import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormFields {
  [key: string]: string | boolean;
}
@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {
  // addAdminForm: FormGroup;
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = ''; 
  roles: string ='';

  successmsg: string ="";
  errorflag: boolean = true;
  

  

  isFieldInvalid(fieldName: string): boolean {
    const formFields: FormFields = {
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    return formFields[fieldName] === undefined || formFields[fieldName] === '';
  }

  formInvalid(): boolean {
    return this.isFieldInvalid('email') ||
           this.isFieldInvalid('username') ||
           this.isFieldInvalid('password') ||
           this.isFieldInvalid('confirmPassword') ||
           (this.password && this.password.length < 8) ||
           this.password !== this.confirmPassword;
  }

  constructor(private http: HttpClient, private router: Router) {}
  registrationSuccessful = false;

  registerUser() {
    
    const user = {
      name: this.username,
      email: this.email,
      password: this.password,
      roles: 'ROLE_ADMIN'
    };
    console.log('1234');

    this.http.post<string>('http://localhost:9090/auth/new', user, { responseType: 'text' as 'json' }).subscribe(
  (response:string) => {
      // console.log('Registration successful:', response);
    this.registrationSuccessful = true;
    this.successmsg=response
          if(this.successmsg=="This UserName is Already Registered.")
          {
            this.errorflag = false;
          }else{
            window.alert("Admin Added Successfull");
            this.router.navigate(['/adminredirect']);
          }
    // window.alert("Registration Successfull");
    // this.router.navigate(['/login']);
  },
  (error) => {
     console.error('Registration failed:', error);
    this.registrationSuccessful = false;
    window.alert('Registration failed');
    // Handle the error here
  }
);

  }  

}
