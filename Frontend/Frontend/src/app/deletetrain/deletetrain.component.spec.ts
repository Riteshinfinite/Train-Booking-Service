import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetrainComponent } from './deletetrain.component';

describe('DeletetrainComponent', () => {
  let component: DeletetrainComponent;
  let fixture: ComponentFixture<DeletetrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletetrainComponent]
    });
    fixture = TestBed.createComponent(DeletetrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
