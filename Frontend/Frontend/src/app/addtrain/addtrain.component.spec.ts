// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AddtrainComponent } from './addtrain.component';

// describe('AddtrainComponent', () => {
//   let component: AddtrainComponent;
//   let fixture: ComponentFixture<AddtrainComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [AddtrainComponent]
//     });
//     fixture = TestBed.createComponent(AddtrainComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { AddtrainComponent } from './addtrain.component';

describe('AddtrainComponent', () => {
  let component: AddtrainComponent;
  let fixture: ComponentFixture<AddtrainComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [AddtrainComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrainComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add train details successfully', () => {
    const mockResponse = {}; // Mock response from the API
  
    // Set the test data for the train details
    component.trainDetails = {
      srno: 1,
      trainnumber: '123',
      trainname: 'Test Train',
      source: 'Test Source',
      destination: 'Test Destination',
      arrTime: '10:00 AM',
      depTime: '11:00 AM',
      date: new Date(),
      avlSlpNonAcgen: 10,
      avlSlNonAcladies: 5,
      avlSlNonAcFare: 100,
      avlSlAcgen: 8,
      avlSLAcLadies: 4,
      avlSlAcFare: 150
    };
  
    // Trigger the addTrain method
    component.addTrain();
  
    // Expect the HTTP post request to be made with the correct URL and data
    const req = httpMock.expectOne('http://localhost:9193/addtrain');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(component.trainDetails);
  
    // Respond with the mock response
    req.flush(mockResponse);
  
    // Expect the alert message to be shown
    spyOn(window, 'alert');
    fixture.detectChanges(); // Trigger change detection to update the component
    expect(window.alert).toHaveBeenCalledWith('Train details added successfully');
  });
});
