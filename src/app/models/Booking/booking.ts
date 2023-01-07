import {UserSubscription} from "./user-subscription";
import {User, UserShort} from "../People/user";

export class Booking {
  id: string;
  timeFrom: string;
  timeTo: string;
  amount: number;
  paid: boolean;
  user: UserShort
}
