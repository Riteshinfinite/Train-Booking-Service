import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../order-service.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import * as RazorpayLibrary from 'razorpay';


declare var Razorpay: any;
interface Passenger {
  name: string;
  age: number;
  gender: string;
  phoneNumber: string;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit{
  title = 'demo';
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
  totalFare !: number;

  

  form: any = {}; 
  constructor(private http: HttpClient,
    private orderService:OrderService,private route: ActivatedRoute,private router: Router) {

  }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const requestPayload = JSON.parse(params['requestPayload']);
      console.log(requestPayload); // Use the requestPayload object as needed in the PaymentComponent

  this.trainNumber = requestPayload.trainNumber;
  this.avlSlpNonAcgen = requestPayload.avlSlpNonAcgen;
  this.source = requestPayload.source;
  this.destination = requestPayload.destination;
  this.date = requestPayload.date;
  this.date = this.date.split('T')[0];
  this.chosenClass = requestPayload.chosenClass;
  this.AvailableSeats = requestPayload.AvailableSeats;
  this.fare = requestPayload.fare;
  this.passengers = requestPayload.passengers;

  console.log(this.passengers); // Use the passengers array as needed in the PaymentComponent

  const passengerCount = this.passengers.length;
  this.totalFare = this.fare * passengerCount;
  console.log(this.totalFare);
      
    });
    

  }

  sayHello() {
    alert("Hello DK");
  }

  paymentId: string ='';
  error: string ='';
  
  options = {
    "key": "",
    "amount": "",
    "name": "Online railway ticket",
    "description": "Web Development",
    "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id":"",
    "handler": function (response: any){
      var event = new CustomEvent("payment.success", 
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );	  
      window.dispatchEvent(event);
    }
    ,
    "prefill": {
    "name": "",
    "email": "",
    "contact": ""
    },
    "notes": {
    "address": ""
    },
    "theme": {
    "color": "#3399cc"
    }
    };
  
    onSubmit(): void {
      this.paymentId = ''; 
      this.error = '';
      
      this.orderService.createOrder(this.form).subscribe(
      data => {

        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.name = "Train Ticket";
        this.options.prefill.email = "onlineticket@gmail.com";
        this.options.prefill.contact = "999999999";
        
        if(data.pgName ==='razor2') {
          this.options.image="";
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
        } else {
          var rzp2 = new Razorpay(this.options);
          rzp2.open();
        }
       
                
        rzp1.on('payment.failed', function (response: any){    
          // Todo - store this information in the server
          console.log(response);
          console.log(response.error.code);    
          console.log(response.error.description);    
          console.log(response.error.source);    
          console.log(response.error.step);    
          console.log(response.error.reason);    
          console.log(response.error.metadata.order_id);    
          console.log(response.error.metadata.payment_id);
          // this.error = response.error.reason;
        }
        );
      }
      ,
      err => {
        this.error = err.error.message;
      }
      );
    }

    @HostListener('window:payment.success', ['$event']) 
    onPaymentSuccess(event: CustomEvent): void {
       console.log(event.detail);

       const requestPayload = {
        passengers: this.passengers,
        source: this.source,
        destination: this.destination,
        date: this.date,
        trainNumber: this.trainNumber,
        chosenClass: this.chosenClass,
        AvailableSeats: this.AvailableSeats
  
      };

       this.http.post('http://localhost:9090/ticket/book', requestPayload).subscribe(
      (response) => {
        console.log('Tickets booked successfully!', response);
        // console.log('requestPayload');
      },
      (error) => {
        console.log(error);
        // console.log(requestPayload);
      }
    );

    const newPassenger: Passenger = {
      name: '',
      age: 5,
      gender: '',
      phoneNumber: ''
    };

    newPassenger.phoneNumber = this.passengers[0].phoneNumber;

    const requestPayload1 = {
      phoneNumber: "+91" + newPassenger.phoneNumber, 
      ticketDetails: JSON.stringify({
        passengers: this.passengers,
        source: this.source,
        destination: this.destination,
        date: this.date,
        trainNumber: this.trainNumber,
        chosenClass: this.chosenClass,
      })
    };

    
    
    this.http.post('http://localhost:8090/api/smssending/sms', requestPayload1)
      .subscribe(
        () => {
          // Success handling
          // console.log('SMS sent successfully');
          // console.log(requestPayload);
          window.alert("Ticket booked successfully,Ticket has been send to the registered mobile number");
          const navigationExtras: NavigationExtras = {
            queryParams: {
              ticketDetails: requestPayload1.ticketDetails
            }
          };
          this.router.navigate(['journeydetails'], navigationExtras);
          // this.router.navigate(['']);

        },
        (error) => {
          // Error handling
          // console.error('Failed to send SMS:', error);
          // console.log(requestPayload1);
          window.alert("enter correct phone number");
        }
      );
    }

}
