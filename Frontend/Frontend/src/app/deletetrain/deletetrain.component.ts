import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deletetrain',
  templateUrl: './deletetrain.component.html',
  styleUrls: ['./deletetrain.component.css']
})
export class DeletetrainComponent {
  trainNumber: string ='';
  selectedDate: string = ''; 
  getMaxDate(): string {
    // Get the current date and format it as 'yyyy-MM-dd'
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.delete(`http://localhost:9090/admin/removetrain/${this.trainNumber}`)
      .subscribe(
        () => {
          console.log('Train deleted successfully.');
          // Add any additional logic or UI updates here after successful deletion
          window.alert("Train deleted successfully");
        },
        (error) => {
          console.error('An error occurred while deleting the train:', error);
          // Handle the error and display an appropriate message to the user
        }
      );

    // Clear the input field
    this.trainNumber = '';
  }
}


/*
trainNumber: string = '';
  selectedDate: string = ''; // Added selectedDate property

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Handle form submission here
  }

  getMaxDate(): string {
    // Get the current date and format it as 'yyyy-MM-dd'
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }*/ 