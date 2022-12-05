import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GuestsComponent} from "./guests/guests.component";
import {StaffComponent} from "./staff/staff.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Люди',
    },
    children: [
      {
        path: '',
        redirectTo: 'guests',
        pathMatch: 'full'
      },
      {
        path: 'guests',
        component: GuestsComponent,
        data: {
          title: 'Гости',
        },
      },
      {
        path: 'staff',
        component: StaffComponent,
        data: {
          title: 'Сотрудники',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
