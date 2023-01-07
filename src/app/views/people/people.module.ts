import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CardModule,
  GridModule,
  NavModule,
  UtilitiesModule,
  TabsModule,
  SmartTableModule,
  CollapseModule, BadgeModule, ButtonModule, SharedModule, FormModule
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

import {GuestsComponent} from "./guests/guests.component";
import {StaffComponent} from "./staff/staff.component";

// Theme Routing
import { PeopleRoutingModule} from "./people-routing.module";
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    SmartTableModule,
    CollapseModule,
    BadgeModule,
    ButtonModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule
  ],
  declarations: [
    GuestsComponent,
    StaffComponent,
    UserDetailsComponent,
    EditUserComponent,
  ]
})
export class PeopleModule {
}
