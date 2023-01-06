import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GuestsComponent} from "./guests/guests.component";
import {StaffComponent} from "./staff/staff.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

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
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
        data: {
          title: 'Редактирование персоны',
        },
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
        data: {
          title: 'Добавление персоны',
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
