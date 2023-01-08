import { Injectable } from '@angular/core';
import {User, UserShort} from "../../models/People/user";
import {UserSubscription} from "../../models/Booking/user-subscription";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getGuests(): UserShort[] {
    return [
      new UserShort(
        '1',
        'Пётр Досочкин',
        '+7-999-777-8866',
        'var@33kita.ru',
        new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
      ),
    ]
  }

  getUser(id: string) {
    return new User(
      id,
      'Пётр Досочкин',
      '+7-999-777-8866',
      'guest',
      'var@33kita.ru',
      new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
    )
  }

  updateUser(user: User) {
    console.log('user updated', user);
  }

  getActiveResidents() : UserShort[] {
    return [
      new UserShort(
        '1',
        'Пётр Досочкин',
        '+7-999-777-8866',
        'var@33kita.ru',
        new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
      ),
      new UserShort(
        '1',
        'Пётр Досочкин',
        '+7-999-777-8866',
        'var@33kita.ru',
        new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
      ),
      new UserShort(
        '1',
        'Пётр Досочкин',
        '+7-999-777-8866',
        'var@los.ru',
        new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
      ),
      new UserShort(
        '1',
        'Пётр Досочкин',
        '+7-999-777-8866',
        'var@hooy.ru',
        new UserSubscription( new Date(2023, 1, 9), new Date(2023, 12, 31), 10)
      )
    ]
  }

  mapStatusToCssClass(status: string){
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }
}
