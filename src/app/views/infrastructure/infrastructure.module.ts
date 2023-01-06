import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    CardModule,
    GridModule,
    NavModule,
    UtilitiesModule,
    TabsModule,
    ButtonModule,
    FormModule, ListGroupModule, ImgModule, ModalModule, ToastModule, TableModule
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

import { PaidServicesComponent } from "./paid-services/paid-services.component";
import { FilialsComponent } from "./filials/filials.component";
import { ResourcesComponent } from "./resources/resources.component";
import { RoomsComponent } from "./rooms/rooms.component";

import { InfrastructureRoutingModule } from "./infrastructure-routing.module";
import { RoomDetailsComponent } from './room-details/room-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeskComponent } from './rooms/desk/desk.component';
import { EditRoomComponent } from './rooms/edit-room/edit-room.component';
import { FilialSelectComponent } from './filials/filial-select/filial-select.component';
import { EditFilialComponent } from './filials/edit-filial/edit-filial.component';
import { PaidServiceComponent } from './paid-services/paid-service/paid-service.component';

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
        ToastModule,
        TableModule
    ],
  declarations: [
    FilialsComponent,
    ResourcesComponent,
    RoomsComponent,
    PaidServicesComponent,
    RoomDetailsComponent,
    DeskComponent,
    EditRoomComponent,
    FilialSelectComponent,
    EditFilialComponent,
    PaidServiceComponent
  ]
})
export class InfrastructureModule {
}
