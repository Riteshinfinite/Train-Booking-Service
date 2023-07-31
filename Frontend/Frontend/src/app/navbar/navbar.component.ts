import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // constructor(private router: Router) {}
  login:boolean=true;
  constructor(private cdRef:ChangeDetectorRef,private sharedService:SharedService){
  this.sharedService.changeLogin$.subscribe(() => {
  
    this.changelogin();
  
  });
  
  }
  
   
  
  logout(){
  
    this.login=true;
  
    console.log("changed")
  
    this.cdRef.detectChanges();
    localStorage.removeItem('token');
    window.alert("Logout Successfully")
  
   
  
  }
  
   
  
  changelogin(){
  
    this.login=false;
  
    console.log("changed")
  
    this.cdRef.detectChanges();
  
  }
}
