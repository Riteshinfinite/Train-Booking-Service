import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminredirectComponent } from './adminredirect.component';

describe('AdminredirectComponent', () => {
  let component: AdminredirectComponent;
  let fixture: ComponentFixture<AdminredirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminredirectComponent]
    });
    fixture = TestBed.createComponent(AdminredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
