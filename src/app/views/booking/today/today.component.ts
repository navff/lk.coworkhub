import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../services/Booking/booking.service";
import {Booking, BookingStatus} from "../../../models/Booking/booking";
import {UsersService} from "../../../services/People/users.service";
import {UserShort} from "../../../models/People/user";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  residents: UserShort[];
  todayBookings: Booking[];

  constructor(private bookingService: BookingService,
              private usersService: UsersService) { }


  ngOnInit(): void {
    this.residents = this.usersService.getActiveResidents();
    this.todayBookings = this.bookingService.getTodayBookings();
  }

  onBookingStart(booking: Booking) {
    console.log('Booking started');
    booking.status = BookingStatus.Started;
  }
}
