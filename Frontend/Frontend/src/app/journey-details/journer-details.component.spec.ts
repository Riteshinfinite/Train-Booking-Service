import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournerDetailsComponent } from './journer-details.component';

describe('JournerDetailsComponent', () => {
  let component: JournerDetailsComponent;
  let fixture: ComponentFixture<JournerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournerDetailsComponent]
    });
    fixture = TestBed.createComponent(JournerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
