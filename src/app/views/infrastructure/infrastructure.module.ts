import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, ButtonModule} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

import { DesksComponent } from "./desks/desks.component";
import { FilialsComponent } from "./filials/filials.component";
import { ResourcesComponent } from "./resources/resources.component";
import { RoomsComponent } from "./rooms/rooms.component";

import { InfrastructureRoutingModule } from "./infrastructure-routing.module";

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
    ButtonModule
  ],
  declarations: [
    FilialsComponent,
    ResourcesComponent,
    RoomsComponent,
    DesksComponent
  ]
})
export class InfrastructureModule {
}
