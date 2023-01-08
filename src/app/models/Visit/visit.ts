import {UserShort} from "../People/user";

export class Visit {
  id: string;
  user: UserShort;
  parentBookingId? : string;
  dateStarted: Date;
  dateStopped?: Date;
  amount: number;
  paid: boolean;
  status: VisitStatus;


  constructor(
      id: string,
      user: UserShort,
      parentBookingId: string,
      amount: number,
      paid: boolean,
      status: VisitStatus,
      dateStarted: Date,
      dateStopped?: Date) {
    this.id = id;
    this.user = user;
    this.parentBookingId = parentBookingId;
    this.dateStarted = dateStarted;
    this.dateStopped = dateStopped;
    this.amount = amount;
    this.paid = paid;
    this.status = status;
  }

  color() {
    if (this.status === VisitStatus.Cancelled) return 'muted';
    if (this.status === VisitStatus.Started) return 'success';
    if (this.status === VisitStatus.Ended) return 'info';
    return 'dark';
  }

  canStop() {
    return this.status === VisitStatus.Started;
  }

  canPay() {
    return this.status === VisitStatus.Ended;
  }

  canCopy() {
    return this.status === VisitStatus.Paid;
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

export enum VisitStatus {
  Started = "Started",
  Ended = "Ended",
  Cancelled = "Cancelled",
  Paid = "Paid"
}
