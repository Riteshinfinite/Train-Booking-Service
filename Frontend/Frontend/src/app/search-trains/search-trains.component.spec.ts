
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { SearchTrainsComponent } from './search-trains.component';

describe('SearchTrainsComponent', () => {
  let component: SearchTrainsComponent;
  let fixture: ComponentFixture<SearchTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [SearchTrainsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark the form as invalid if source is empty', () => {
    const form = component.searchForm;

    // Set the form values with an empty source
    form.setValue({
      source: '',
      destination: 'Destination',
      date: '2023-07-12'
    });

    // Trigger the form submission
    component.searchTrains();

    expect(form.valid).toBe(false);
  });

  it('should display an error message if source and destination are the same', () => {
    const form = component.searchForm;

    // Set the form values with the same source and destination
    form.setValue({
      source: 'Same',
      destination: 'Same',
      date: '2023-07-12'
    });

    component.searchTrains();

    expect(component.isSameSourceAndDestination).toBe(true);
  });
});
