import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTrainsComponent } from './search-trains/search-trains.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DeletetrainComponent } from './deletetrain/deletetrain.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminredirectComponent } from './adminredirect/adminredirect.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { JournerDetailsComponent } from './journey-details/journer-details.component';
const routes: Routes = [
  { path: '', component: SearchTrainsComponent},
  { path: 'login', component: LoginuserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'addtrain', component: AddtrainComponent },       // Assuming you have an AddTrainComponent
  { path: 'removetrain', component: DeletetrainComponent },
  { path: 'passenger-details-form', component: PassengerdetailsComponent },
  { path: 'payment', component: PaymentComponent},
  { path: 'adminredirect', component: AdminredirectComponent},
  { path: 'addadmin', component: AddadminComponent},
  { path: 'journeydetails', component: JournerDetailsComponent},
  { path: 'searchpage', component: SearchTrainsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
