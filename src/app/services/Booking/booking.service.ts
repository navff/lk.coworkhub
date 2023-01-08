import {Injectable} from '@angular/core';
import {Booking, BookingStatus} from "../../models/Booking/booking";
import {UserSubscription} from "../../models/Booking/user-subscription";
import {UserShort} from "../../models/People/user";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getTodayBookings(): Booking[] {
    return [
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 30),
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        BookingStatus.Created
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        BookingStatus.Cancelled
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        BookingStatus.Created
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        BookingStatus.Cancelled
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        BookingStatus.Created
      )
    ]
  }
}
