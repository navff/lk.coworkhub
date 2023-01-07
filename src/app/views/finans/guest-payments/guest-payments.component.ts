import { Component, OnInit } from '@angular/core';
import {Payment} from "../../../models/Finans/payment";
import {PaymentsService} from "../../../services/Finans/payments.service";

@Component({
  selector: 'app-guest-payments',
  templateUrl: './guest-payments.component.html',
  styleUrls: ['./guest-payments.component.scss']
})
export class GuestPaymentsComponent implements OnInit {

  payments: Payment[];

  columns = [
    { key: 'externalId', label: 'externalId', _style: { width: '10%' } },
    { key: 'date', label: 'date', _style: { width: '10%' } },
    { key: 'userId', _style: { width: '10%' } }
  ];

  details_visible = Object.create({});

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit(): void {
    this.payments = this.paymentsService.getPayments();
  }

  onRowClick($event: any) {

  }

  onAddPaymentClick() {

  }
}
