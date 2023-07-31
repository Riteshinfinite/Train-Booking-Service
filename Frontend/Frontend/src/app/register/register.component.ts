import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = ''; 
  roles: string ='';

  successmsg: string ="";
  errorflag: boolean = true;
  registerForm: FormGroup;

  
  constructor(private http: HttpClient, private router: Router,private formBuilder: FormBuilder) {
    // Initialize the form with FormBuilder
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  registrationSuccessful = false;

  registerUser() {
    
    const user = {
      name: this.username,
      email: this.email,
      password: this.password,
      roles: 'ROLE_USER'
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
            window.alert("Registration Successfull");
            this.router.navigate(['/login']);
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

