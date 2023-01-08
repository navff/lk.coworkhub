import {UserSubscription} from "../Booking/user-subscription";
import {Md5} from "md5-typescript";

export class User {
  id: string;
  name: string;
  registered: string;
  email?: string;
  role: string;
  subscription?: UserSubscription;


  constructor(
      id: string,
      name: string,
      registered: string,
      role: string,
      email: string,
      subscription?: UserSubscription) {
    this.id = id;
    this.name = name;
    this.registered = registered;
    this.role = role;
    this.email = email;
    this.subscription = subscription;
  }

  static emailHash(email?: string) {
    if (email) {
      return Md5.init(email);
    }
    return "nothing";
  }

  static gravatarUrl(email?: string): string {
    const emailHash = User.emailHash(email);
    return "https://www.gravatar.com/avatar/" + emailHash;
  }

}


export class UserShort {
  id: string;
  name: string;
  email?: string;
  subscription?: UserSubscription;
  phone: string;


  constructor(
      id: string,
      name: string,
      phone: string,
      email: string,
      subscription?: UserSubscription) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.subscription = subscription;
    this.email = email;
  }

  avatar = () => User.gravatarUrl(this.email);


}
