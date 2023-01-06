import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GuestsComponent} from "./guests/guests.component";
import {StaffComponent} from "./staff/staff.component";
import {UserDetailsComponent} from "./user-details/user-details.component";

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
      {
        path: 'user-details/:id',
        component: UserDetailsComponent,
        data: {
          title: 'Информация о персоне',
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
