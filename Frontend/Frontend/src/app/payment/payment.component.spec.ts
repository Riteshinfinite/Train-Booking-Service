import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
// import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent]
    });
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo'`, () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('demo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(PaymentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to demo!');
  });
});
