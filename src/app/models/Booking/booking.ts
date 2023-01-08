import {UserShort} from "../People/user";

export class Booking {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  amount: number;
  paid: boolean;
  user: UserShort;
  status: BookingStatus;


  constructor(
      id: string,
      dateFrom: Date,
      dateTo: Date,
      amount: number,
      paid: boolean,
      user: UserShort,
      status?: BookingStatus) {
    this.id = id;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.amount = amount;
    this.paid = paid;
    this.user = user;
    this.status = status ?? BookingStatus.Created;
  }

  color() {
    if (this.status === BookingStatus.Cancelled) return 'muted';
    if (this.status === BookingStatus.Started) return 'success';
    if (this.status === BookingStatus.Created) return 'light';
    if (this.status === BookingStatus.Ended) return 'info';
    return 'dark';
  }

  canStart() {
    return this.status === BookingStatus.Created;
  }

  canStop() {
    return this.status === BookingStatus.Started;
  }

  canPay() {
    return this.status === BookingStatus.Ended;
  }

  canCopy() {
    return this.status === BookingStatus.Paid;
  }

  canCancel() {
    return this.status === BookingStatus.Created;
  }
}

export enum BookingStatus {
  Created = "Created",
  Started = "Started",
  Ended = "Ended",
  Cancelled = "Cancelled",
  Paid = "Paid"
}
