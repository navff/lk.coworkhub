import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CwhBillingComponent} from "./cwh-billing/cwh-billing.component";
import {GuestPaymentsComponent} from "./guest-payments/guest-payments.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Финансы',
    },
    children: [
      {
        path: '',
        redirectTo: 'guest-payments',
        pathMatch: 'full'
      },
      {
        path: 'guest-payments',
        component: GuestPaymentsComponent,
        data: {
          title: 'Сегодня',
        },
      },
      {
        path: 'cwh-billing',
        component: CwhBillingComponent,
        data: {
          title: 'Расчёты с CWH',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinansRoutingModule {}
