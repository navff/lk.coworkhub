import {UserSubscription} from "../Booking/user-subscription";

export class User {
  id: string;
  name: string;
  registered: string;
  role: string;
  subscription?: UserSubscription;
  avatar?: string;
}

export class UserShort {
  id: string;
  name: string;
  subscription?: UserSubscription;
  avatar?: string;
  phone: string;
}
