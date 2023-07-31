import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  adminUsername: string = '';
  adminPassword: string = '';

  loginAdmin() {
    // Perform admin login logic here
    console.log('Admin Login');
    console.log('Username:', this.adminUsername);
    console.log('Password:', this.adminPassword);
    
    // You can implement further functionality such as authentication and authorization checks here
  }

}
