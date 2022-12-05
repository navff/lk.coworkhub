import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwhBillingComponent } from './cwh-billing.component';

describe('CwhBillingComponent', () => {
  let component: CwhBillingComponent;
  let fixture: ComponentFixture<CwhBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwhBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwhBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
