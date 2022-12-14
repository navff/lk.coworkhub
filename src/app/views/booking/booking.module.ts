import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    CardModule,
    GridModule,
    NavModule,
    UtilitiesModule,
    TabsModule,
    ProgressModule,
    TableModule, AvatarModule, ButtonModule
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

import { TimetableComponent } from "./timetable/timetable.component";
import { TodayComponent } from "./today/today.component";

// Theme Routing
import { BookingRoutingModule } from "./booking-routing.module";

@NgModule({
    imports: [
        CommonModule,
        BookingRoutingModule,
        CardModule,
        GridModule,
        UtilitiesModule,
        IconModule,
        NavModule,
        TabsModule,
        ProgressModule,
        TableModule,
        AvatarModule,
        ButtonModule
    ],
  declarations: [
    TimetableComponent,
    TodayComponent,
  ]
})
export class BookingModule {
}
