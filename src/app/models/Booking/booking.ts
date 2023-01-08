import {UserShort} from "../People/user";

export class Booking {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  dateStarted?: Date;
  dateStopped?: Date;
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

  getElapsedHours() {
    if (!this.dateStarted) return 0;

    const span = (new Date()).getTime() - this.dateStarted?.getTime();
    return Math.floor((span % 86400000) / 3600000);
  }

  getElapsedMinutes() {
    if (!this.dateStarted) return 0;

    const span = (new Date()).getTime() - this.dateStarted?.getTime();
    return Math.round(((span % 86400000) % 3600000) / 60000);
  }
}

export enum BookingStatus {
  Created = "Created",
  Started = "Started",
  Ended = "Ended",
  Cancelled = "Cancelled",
  Paid = "Paid"
}
