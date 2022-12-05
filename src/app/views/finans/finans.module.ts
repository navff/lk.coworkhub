import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

import { CwhBillingComponent} from "./cwh-billing/cwh-billing.component";
import {GuestPaymentsComponent} from "./guest-payments/guest-payments.component";

// Theme Routing
import { FinansRoutingModule} from "./finans-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FinansRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    CwhBillingComponent,
    GuestPaymentsComponent,
  ]
})
export class FinansModule {
}
