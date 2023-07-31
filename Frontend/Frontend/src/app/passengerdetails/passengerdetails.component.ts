import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface Passenger {
  name: string;
  age: number;
  gender: string;
  phoneNumber: string;
}
@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit{
  name: string ='';
  age: number =5;
  gender: string ='';
  phoneNumber: string ='';
  passengers: Passenger[] = [];
  isAddPassengerDisabled: boolean = false;

  trainNumber: string='';
  avlSlpNonAcgen: string='';
  source: string='';
  destination: string='';
  date: string='';
  chosenClass: string='';
  AvailableSeats: number=0;
  fare: number=1;
  


  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.trainNumber = params['trainNumber'];
      this.avlSlpNonAcgen = params['avlSlpNonAcgen'];
      this.source = params['source'];
      this.destination = params['destination'];
      this.date = params['date'];
      this.date = this.date.split('T')[0];
      this.chosenClass = params['chosenClass'];
      this.AvailableSeats = params['AvailableSeats'];
      this.fare = params['fare'];

      // console.log('Train Number:', this.trainNumber);
      // console.log('Available Slp Non Acgen:', this.avlSlpNonAcgen);
      // console.log('Source:', this.source);
      // console.log('Destination:', this.destination);
      // console.log('Date:', this.date);
      
    });
  }

  deletePassenger(index: number): void {
    this.passengers.splice(index, 1);
  }

  addPassenger():void{
    if (this.passengers.length < 6) {
      if (this.passengers.length >= 6) {
        this.isAddPassengerDisabled = true;
      }
    }
    const newPassenger: Passenger = {
      name: '',
      age: 5,
      gender: '',
      phoneNumber: ''
    };
    this.passengers.push(newPassenger);
    
  }


  submitForm(): void {
    // Perform form submission logic here
    // console.log(this.passengers);
    const requestPayload = {
      passengers: this.passengers,
      source: this.source,
      destination: this.destination,
      date: this.date,
      trainNumber: this.trainNumber,
      chosenClass: this.chosenClass,
      AvailableSeats: this.AvailableSeats,
      fare: this.fare

    };
    
    if (this.passengers.length === 0) {
      window.alert('Please enter at least one passenger before booking the ticket.');
      return;
    }

    this.router.navigate(['/payment'], { queryParams: { requestPayload: JSON.stringify(requestPayload) } });


    // this.router.navigate(['/payment'], { queryParams: { passengers: JSON.stringify(this.passengers) } });

    // this.http.post('http://localhost:8084/tickets/book', requestPayload).subscribe(
    //   (response) => {
    //     console.log('Tickets booked successfully!', response);
    //     // console.log('requestPayload');
    //   },
    //   (error) => {
    //     console.log(error);
    //     // console.log(requestPayload);
    //   }
    // );

    // const newPassenger: Passenger = {
    //   name: '',
    //   age: 5,
    //   gender: '',
    //   phoneNumber: ''
    // };

    // const phoneNumberInput = document.getElementById('passengerPhoneNumber') as HTMLInputElement;
    // newPassenger.phoneNumber = phoneNumberInput.value;

    // const requestPayload1 = {
    //   phoneNumber: "+91" + newPassenger.phoneNumber, 
    //   ticketDetails: JSON.stringify({
    //     passengers: this.passengers,
    //     source: this.source,
    //     destination: this.destination,
    //     date: this.date,
    //     trainNumber: this.trainNumber,
    //     chosenClass: this.chosenClass,
    //   })
    // };

    
    
    // this.http.post('http://localhost:8090/api/smssending/sms', requestPayload1)
    //   .subscribe(
    //     () => {
    //       // Success handling
    //       // console.log('SMS sent successfully');
    //       // console.log(requestPayload);
    //       window.alert("Ticket booked successfully,Ticket has been send to the registered mobile number");
    //       this.router.navigate(['']);

    //     },
    //     (error) => {
    //       // Error handling
    //       // console.error('Failed to send SMS:', error);
    //       // console.log(requestPayload1);
    //       window.alert("enter correct phone number");
    //     }
    //   );


    
  

  }

}
