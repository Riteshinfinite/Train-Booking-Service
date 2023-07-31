import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface Order {
  name: string;
  email: string;
  phone: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<any> {
    return this.http.post("http://localhost:8080/pg/createOrder", {
      customerName: order.name,
      email: order.email,
      phoneNumber: order.phone,
      amount: order.amount
    }, httpOptions);
  }
}

// let flag:boolean=false;


