import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CardModule,
  GridModule,
  NavModule,
  UtilitiesModule,
  TabsModule,
  ButtonModule,
  FormModule, ListGroupModule, ImgModule, ModalModule, ToastModule
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

import { DesksComponent } from "./desks/desks.component";
import { FilialsComponent } from "./filials/filials.component";
import { ResourcesComponent } from "./resources/resources.component";
import { RoomsComponent } from "./rooms/rooms.component";

import { InfrastructureRoutingModule } from "./infrastructure-routing.module";
import { RoomDetailsComponent } from './room-details/room-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeskComponent } from './desks/desk/desk.component';

@NgModule({
  imports: [
    CommonModule,
    InfrastructureRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    ButtonModule,
    FormModule,
    ListGroupModule,
    ImgModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
  ],
  declarations: [
    FilialsComponent,
    ResourcesComponent,
    RoomsComponent,
    DesksComponent,
    RoomDetailsComponent,
    DeskComponent
  ]
})
export class InfrastructureModule {
}
