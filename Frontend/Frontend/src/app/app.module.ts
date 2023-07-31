import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTrainsComponent } from './search-trains/search-trains.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DeletetrainComponent } from './deletetrain/deletetrain.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { BookingComponent } from './booking/booking.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { JournerDetailsComponent } from './journey-details/journer-details.component';
import { AdminredirectComponent } from './adminredirect/adminredirect.component';
import { AddadminComponent } from './addadmin/addadmin.component';

const routes: Routes = [
  { path: 'login', component: LoginuserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchTrainsComponent },
  { path: 'booking', component: BookingComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
@NgModule({
  declarations: [
    AppComponent,
    SearchTrainsComponent,
    HeaderComponent,
    NavbarComponent,
    RegisterComponent,
    LoginuserComponent,
    AdminloginComponent,
    FooterComponent,
    CancelticketComponent,
    AddtrainComponent,
    DeletetrainComponent,
    AdminnavbarComponent,
    BookingComponent,
    PassengerdetailsComponent,
    PaymentComponent,
    JournerDetailsComponent,
    AdminredirectComponent,
    AddadminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
