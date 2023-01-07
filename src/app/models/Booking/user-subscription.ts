export class UserSubscription {


  constructor(from: string, to: string, percent: number) {
    this.from = from;
    this.to = to;
    this.percent = percent;
  }

  from: string;
  to: string;
  percent: number;

  public status(): string {
    if (this.percent < 50) return 'success';
    if (this.percent >= 50 && this.percent < 80) return 'warning';
    if (this.percent >= 80) return 'danger';

    return 'success';
  }


}
