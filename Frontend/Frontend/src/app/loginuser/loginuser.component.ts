import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface AuthRequest{
  username:string,
  password:string
}

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  username: string = '';
  password: string ='';

  constructor(private http: HttpClient, private router: Router,private sharedService:SharedService,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginData:AuthRequest = { username: this.username, password: this.password };

  loginForm: FormGroup;
  
  // constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the login form with FormBuilder
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  

  loginUser() {

    this.loginData.username=this.username;
    this.loginData.password=this.password;
    
    // this.http.post<string>('http://localhost:9090/login/redirect',this.loginData,{ responseType: 'text' as 'json' }).subscribe(
    //   (response: string) =>{
    //     if(response==='ROLE_USER'){
    //       this.router.navigate(['']);
    //     }
    //     console.log("Successful");
        
    //   },(error) => {
    //     // Handle HTTP error or network error
    //     // console.log('Login failed', error);
    //     window.alert('Login failed');
    //     console.log("Failed")

    //   }
    // )
    let url1 ='http://localhost:9090/auth/getroles/'+this.username;
    
    this.http.post<string>('http://localhost:9090/auth/authenticate', this.loginData,{ responseType: 'text' as 'json' })
      .subscribe(
        
        (response: string) => {
          // Handle successful login
          console.log('Login successful', response);
          window.alert('Login successful');
          this.sharedService.triggerChangeLogin();
          localStorage.setItem('token', response);
          this.http.get<string>(url1,{ responseType: 'text' as 'json' }).subscribe(
            (response:string)=> {
              console.log("got the role");
              console.log(response);
              console.log("Check");
              if(response==="ROLE_USER")
              {
                console.log("navigate");
                this.router.navigate([''])
              }else if(response==='ROLE_ADMIN'){
                this.router.navigate(['/adminredirect'])
              }
  
            },
            (error) => {
              console.log("didnt got the role");
              console.log(error);
            }
          )
          // this.router.navigate(['']);          
        },
        (error) => {
          // Handle HTTP error or network error
          // console.log('Login failed', error);
          window.alert('Login failed');
  
        }
      );
  }
  }


