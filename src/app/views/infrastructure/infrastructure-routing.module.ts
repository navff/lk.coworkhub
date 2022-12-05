import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesksComponent } from "./desks/desks.component";
import { FilialsComponent } from "./filials/filials.component";
import { ResourcesComponent } from "./resources/resources.component";
import { RoomsComponent } from "./rooms/rooms.component";


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
        path: 'desks',
        component: DesksComponent,
        data: {
          title: 'Рабочие места',
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
