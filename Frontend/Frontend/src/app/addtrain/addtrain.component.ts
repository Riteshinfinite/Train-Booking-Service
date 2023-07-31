import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TrainDetails } from 'src/train-details.model';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent {
  trainDetails: TrainDetails = {
    srno: 0,
    trainnumber: '0',
    trainname: '',
    source: '',
    destination: '',
    arrTime: '',
    depTime: '',
    date: new Date(),
    avlSlpNonAcgen: 0,
    avlSlNonAcladies: 0,
    avlSlNonAcFare: 0,
    avlSlAcgen: 0,
    avlSLAcLadies: 0,
    avlSlAcFare: 0
  };
  getCurrentDate(): string {
    const today: Date = new Date();
    const year: number = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    let day: string | number = today.getDate();

    // Pad single-digit month and day with leading zero if needed
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  }

  constructor(private http: HttpClient) {}

  addTrain() {
    const apiUrl = 'http://localhost:9090/admin/addtrain'; // Replace with your backend API URL

    this.http.post(apiUrl, this.trainDetails).subscribe(
      (response) => {
        // console.log(response); // Handle the response as needed
        window.alert("Train details added successfully");
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
