import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent {
  passengerId: string = '';

  constructor(private http: HttpClient) {}

  cancelTicket() {
    const apiUrl = 'http://localhost:8084/cancel'; 
    const cancelRequest = {
      passengerId: this.passengerId
    };

    this.http.delete(apiUrl, { body: cancelRequest }).subscribe(
      () => {
        alert('Ticket cancelled successfully!');
      },
      (error) => {
        console.error('Failed to cancel ticket:', error);
      }
    );
  }

}
