import {UserShort} from "../People/user";

export class Booking {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  dateStarted?: Date;
  dateStopped?: Date;
  user: UserShort;
  status: BookingStatus;


  constructor(
      id: string,
      dateFrom: Date,
      dateTo: Date,
      user: UserShort,
      status?: BookingStatus) {
    this.id = id;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.user = user;
    this.status = status ?? BookingStatus.Created;
  }

  color() {
    if (this.status === BookingStatus.Cancelled) return 'muted';
    if (this.status === BookingStatus.Created) return 'light';
    if (this.status === BookingStatus.Started) return 'success';
    return 'dark';
  }

  canStart() {
    return this.status === BookingStatus.Created;
  }

  canCancel() {
    return this.status === BookingStatus.Created;
  }

  canEdit() {
    return this.status !== BookingStatus.Started;
  }
}

export enum BookingStatus {
  Created = "Created",
  Started = "Started",
  Cancelled = "Cancelled"
}
