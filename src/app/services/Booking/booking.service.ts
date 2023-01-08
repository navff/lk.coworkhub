import {Injectable} from '@angular/core';
import {Booking, BookingStatus} from "../../models/Booking/booking";
import {UserSubscription} from "../../models/Booking/user-subscription";

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
        123,
        true,
        {
          id: '1',
          name: 'Пётр Досочкин',
          subscription: new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10),
          avatar: 'https://technobalt.com/media/filer_public_thumbnails/filer_public/50/4c/504c2c62-3952-4947-8c29-b62b9e5d5023/contact.png__1170x1170_q85_crop_subsampling-2_upscale.jpg',
          phone: '+7-999-777-8866'
        },
        BookingStatus.Started
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        123,
        true,
        {
          id: '1',
          name: 'Вася Петечкин',
          subscription: new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10),
          avatar: 'https://technobalt.com/media/filer_public_thumbnails/filer_public/50/4c/504c2c62-3952-4947-8c29-b62b9e5d5023/contact.png__1170x1170_q85_crop_subsampling-2_upscale.jpg',
          phone: '+7-999-888-7799'
        },
        BookingStatus.Cancelled
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        123,
        true,
        {
          id: '1',
          name: 'Пётр Досочкин',
          subscription: new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10),
          avatar: 'https://technobalt.com/media/filer_public_thumbnails/filer_public/50/4c/504c2c62-3952-4947-8c29-b62b9e5d5023/contact.png__1170x1170_q85_crop_subsampling-2_upscale.jpg',
          phone: '+7-999-777-8866'
        },
        BookingStatus.Created
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        123,
        true,
        {
          id: '1',
          name: 'Пётр Досочкин',
          subscription: new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10),
          avatar: 'https://technobalt.com/media/filer_public_thumbnails/filer_public/50/4c/504c2c62-3952-4947-8c29-b62b9e5d5023/contact.png__1170x1170_q85_crop_subsampling-2_upscale.jpg',
          phone: '+7-999-777-8866'
        },
        BookingStatus.Ended
      ),
      new Booking(
        '1',
        new Date(2023, 1, 9, 13, 0),
        new Date(2023, 1, 9, 18, 0),
        123,
        true,
        {
          id: '1',
          name: 'Пётр Досочкин',
          subscription: new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10),
          avatar: 'https://technobalt.com/media/filer_public_thumbnails/filer_public/50/4c/504c2c62-3952-4947-8c29-b62b9e5d5023/contact.png__1170x1170_q85_crop_subsampling-2_upscale.jpg',
          phone: '+7-999-777-8866'
        },
        BookingStatus.Paid
      )
    ]
  }
}
