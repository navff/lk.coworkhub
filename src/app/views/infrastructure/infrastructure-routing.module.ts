import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaidServicesComponent } from "./paid-services/paid-services.component";
import { FilialsComponent } from "./filials/filials.component";
import { ResourcesComponent } from "./resources/resources.component";
import { RoomsComponent } from "./rooms/rooms.component";
import {RoomDetailsComponent} from "./room-details/room-details.component";
import {EditFilialComponent} from "./filials/edit-filial/edit-filial.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Инфраструктура',
    },
    children: [
      {
        path: '',
        redirectTo: 'filials',
        pathMatch: 'full'
      },
      {
        path: 'filials',
        component: FilialsComponent,
        data: {
          title: 'Филиалы',
        },
      },
      {
        path: 'rooms',
        component: RoomsComponent,
        data: {
          title: 'Кабинеты',
        },
      },
      {
        path: 'room-details',
        component: RoomDetailsComponent,
        data: {
          title: 'Кабинет',
        },
      },
      {
        path: 'edit-filial/:id',
        component: EditFilialComponent,
        data: {
          title: 'Редактировать филиал',
        },
      },
      {
        path: 'services',
        component: PaidServicesComponent,
        data: {
          title: 'Услуги',
        },
      },
      {
        path: 'resources',
        component: ResourcesComponent,
        data: {
          title: 'Ресурсы',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfrastructureRoutingModule {}
