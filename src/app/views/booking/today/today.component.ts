import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../services/Booking/booking.service";
import {Booking, BookingStatus} from "../../../models/Booking/booking";
import {UsersService} from "../../../services/People/users.service";
import {UserShort} from "../../../models/People/user";
import {VisitsService} from "../../../services/Visits/visits.service";
import {Visit} from "../../../models/Visit/visit";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  residents: UserShort[];
  todayBookings: Booking[];
  todayVisits: Visit[];

  constructor(private bookingService: BookingService,
              private usersService: UsersService,
              private visitsService: VisitsService) { }


  ngOnInit(): void {
    this.residents = this.usersService.getActiveResidents();
    this.todayBookings = this.bookingService.getTodayBookings();
    this.todayVisits = this.visitsService.getTodayVisits();
  }

  onBookingStart(booking: Booking) {
    console.log('Booking started');
    booking.status = BookingStatus.Started;
    this.todayVisits.push(this.visitsService.addVisit(booking));
  }
}
