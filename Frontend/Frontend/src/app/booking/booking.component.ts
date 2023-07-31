import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainDetails } from 'src/train-details.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  trainDetailsList: any[] = [];

  constructor(private route: ActivatedRoute,private router: Router) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['trainDetails']) {
        this.trainDetailsList = JSON.parse(params['trainDetails']);
        // console.log(this.trainDetailsList);
      }
    });
  }

  
}
