import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TimetableComponent} from "./timetable/timetable.component";
import {TodayComponent} from "./today/today.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Брони',
    },
    children: [
      {
        path: '',
        redirectTo: 'today',
        pathMatch: 'full'
      },
      {
        path: 'today',
        component: TodayComponent,
        data: {
          title: 'Сегодня',
        },
      },
      {
        path: 'timetable',
        component: TimetableComponent,
        data: {
          title: 'Расписание',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
