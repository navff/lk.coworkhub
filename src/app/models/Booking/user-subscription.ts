export class UserSubscription {


  constructor(from: Date, to: Date, percent: number) {
    this.from = from;
    this.to = to;
    this.percent = percent;
  }

  from: Date;
  to: Date;
  percent: number;

  public usage_color(): string {
    if (this.percent < 50) return 'success';
    if (this.percent >= 50 && this.percent < 80) return 'warning';
    if (this.percent >= 80) return 'danger';

    return 'success';
  }


}
