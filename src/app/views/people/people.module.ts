import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

import {GuestsComponent} from "./guests/guests.component";
import {StaffComponent} from "./staff/staff.component";

// Theme Routing
import { PeopleRoutingModule} from "./people-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    GuestsComponent,
    StaffComponent,
  ]
})
export class PeopleModule {
}
