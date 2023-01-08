import {Injectable} from '@angular/core';
import {Visit, VisitStatus} from "../../models/Visit/visit";
import {Booking} from "../../models/Booking/booking";
import {UserShort} from "../../models/People/user";
import {UserSubscription} from "../../models/Booking/user-subscription";

@Injectable({
  providedIn: 'root'
})
export class VisitsService {
  constructor() { }

  getTodayVisits(): Visit[] {
    return [
      new Visit(
        '1',
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        '',
        1234,
        false,
        VisitStatus.Started,
        new Date('2023-01-08 9:12:45')
      ),

      new Visit(
        '1',
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        '',
        335,
        false,
        VisitStatus.Cancelled,
        new Date(2023, 0, 8, 9, 5, 30)
      ),

      new Visit(
        '1',
        new UserShort(
          '1',
          'Пётр Досочкин',
          '+7-999-777-8866',
          'var@33kita.ru',
          new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
        ),
        '',
        1234,
        false,
        VisitStatus.Ended,
        new Date(),
        new Date()
      )
    ]
  }

  addVisit(booking: Booking): Visit {
    return  new Visit(
      '1',
      booking.user,
      booking.id,
      0,
      false,
      VisitStatus.Started,
      new Date()
    );
  }
}
