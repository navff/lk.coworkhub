import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPaymentsComponent } from './guest-payments.component';

describe('GuestPaymentsComponent', () => {
  let component: GuestPaymentsComponent;
  let fixture: ComponentFixture<GuestPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
