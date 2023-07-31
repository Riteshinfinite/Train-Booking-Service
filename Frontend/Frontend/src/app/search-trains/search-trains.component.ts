
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TrainDetails } from 'src/train-details.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-trains',
  templateUrl: './search-trains.component.html',
  styleUrls: ['./search-trains.component.css']
})
export class SearchTrainsComponent implements OnInit {
  searchForm!: FormGroup;
  isSameSourceAndDestination: boolean = false;
  trainDetailsList: TrainDetails[] = [];


  getCurrentDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  searchTrains() {
    if (this.searchForm.invalid) {
      return;
    }

    const source = this.searchForm.value.source;
    const destination = this.searchForm.value.destination;
    const date = this.searchForm.value.date;

    if (source.toLowerCase().trim() === destination.toLowerCase().trim()) {
      this.isSameSourceAndDestination = true;
      return;
    }else{

    const apiUrl = 'http://localhost:8081/searchtrains'; // Replace with your backend API URL

    const requestData = {
      source: source,
      destination: destination,
      date: date
    };
    console.log(requestData);

    this.http.post<TrainDetails[]>(apiUrl, requestData).subscribe(
      (response) => {
        this.trainDetailsList = response;
      //  console.log(this.trainDetailsList);

      const storedToken = localStorage.getItem('token');
      if (storedToken !== null) {
        // Code to handle the token, e.g., send it with API requests, set it as a header, etc.
        this.router.navigate(['/booking'], { queryParams: { trainDetails: JSON.stringify(this.trainDetailsList) } });
      } else {
        // Token is not found in localStorage, handle this scenario accordingly.
        this.router.navigate(['/login']);
      }

        // this.router.navigate(['/booking'], { queryParams: { trainDetails: JSON.stringify(this.trainDetailsList) } });
      },
      (error) => {
        console.error(error);
      }
    );
    
  }
}
}

