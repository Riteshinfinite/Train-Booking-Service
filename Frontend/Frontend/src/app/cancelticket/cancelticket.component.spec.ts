// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CancelticketComponent } from './cancelticket.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { FormsModule } from '@angular/forms';
// import { render, fireEvent } from '@testing-library/angular';

// import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// describe('CancelticketComponent', () => {
//   let component: CancelticketComponent;
//   let fixture: ComponentFixture<CancelticketComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CancelticketComponent]
//     });
//     fixture = TestBed.createComponent(CancelticketComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should cancel the ticket successfully', async () => {
//     const { getByLabelText, getByText } = await render(CancelticketComponent);
//     const passengerIdInput = getByLabelText('Passenger ID:');
//     const cancelButton = getByText('Cancel Ticket');

//     fireEvent.input(passengerIdInput, { target: { value: '123' } });
//     fireEvent.click(cancelButton);

//     // Mock the HTTP service and expect the request to be made correctly
//     const httpSpy = spyOn(TestBed.inject(HttpClient), 'delete').and.returnValue(of({}));
//     expect(httpSpy).toHaveBeenCalledWith('http://localhost:8084/cancel', { body: { passengerId: '123' } });

//     // Assert the expected alert message
//     const alertSpy = spyOn(window, 'alert');
//     expect(alertSpy).toHaveBeenCalledWith('Ticket cancelled successfully!');
//   });
// });


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { FormsModule } from '@angular/forms';
// import { render, fireEvent } from '@testing-library/angular';

// import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// import { CancelticketComponent } from './cancelticket.component';

// describe('CancelticketComponent', () => {
//   let component: CancelticketComponent;
//   let fixture: ComponentFixture<CancelticketComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, FormsModule], // Add HttpClientTestingModule and FormsModule here
//       declarations: [CancelticketComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CancelticketComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should cancel the ticket successfully', async () => {
//     const { getByLabelText, getByText } = await render(CancelticketComponent);
//     const passengerIdInput = getByLabelText('Passenger ID:');
//     const cancelButton = getByText('Cancel Ticket');

//     fireEvent.input(passengerIdInput, { target: { value: '123' } });
//     fireEvent.click(cancelButton);

//     // Mock the HTTP service and expect the request to be made correctly
//     const httpSpy = spyOn(TestBed.inject(HttpClient), 'delete').and.returnValue(of({}));
//     expect(httpSpy).toHaveBeenCalledWith('http://localhost:8084/cancel', { body: { passengerId: '123' } });

//     // Assert the expected alert message
//     const alertSpy = spyOn(window, 'alert');
//     expect(alertSpy).toHaveBeenCalledWith('Ticket cancelled successfully!');
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { render, fireEvent } from '@testing-library/angular';

import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CancelticketComponent } from './cancelticket.component';

describe('CancelticketComponent', () => {
  let component: CancelticketComponent;
  let fixture: ComponentFixture<CancelticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [CancelticketComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel the ticket successfully', async () => {
    const { getByLabelText, getByText } = await render(CancelticketComponent);
    const passengerIdInput = getByLabelText('Passenger ID:');
    const cancelButton = getByText('Cancel Ticket');

    fireEvent.input(passengerIdInput, { target: { value: 1 } });
    fireEvent.click(cancelButton);

    // Mock the HTTP service and expect the request to be made correctly
    const httpSpy = spyOn(TestBed.inject(HttpClient), 'delete').and.returnValue(of({}));
    expect(httpSpy).toHaveBeenCalledWith('http://localhost:8084/cancel', { body: { passengerId: '123' } });

    // Assert the expected alert message
    const alertSpy = spyOn(window, 'alert');
    expect(alertSpy).toHaveBeenCalledWith('Ticket cancelled successfully!');
  });
});
