import { Injectable } from '@angular/core';
import {Booking} from "../../models/Booking/booking";
import {UserSubscription} from "../../models/Booking/user-subscription";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getTodayBookings(): Booking[] {
    return [
      {
        id: '1',
        amount: 123,
        timeFrom: '11:00',
        timeTo: '16:00',
        paid: true,
        user: {
          id: '1',
          name: 'Пётр Досочкин',
          subscription: new UserSubscription('2023-01-09', '2023-12-31', 10),
          avatar: 'https://technobalt.com/media/filer_public_thumbnails/filer_public/50/4c/504c2c62-3952-4947-8c29-b62b9e5d5023/contact.png__1170x1170_q85_crop_subsampling-2_upscale.jpg',
          phone: '+7-999-777-8866'

        }
      }
    ]
  }
}
