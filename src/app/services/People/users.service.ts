import { Injectable } from '@angular/core';
import {User, UserShort} from "../../models/People/user";
import {UserSubscription} from "../../models/Booking/user-subscription";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getGuests(): User[] {
    return [
      {id: '0', name: 'John Doe', registered: '2018/01/01', role: 'Guest'},
      {id: '1', name: 'Samppa Nori', registered: '2018/01/01', role: 'Member'},
      {id: '2', name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff'},
      {id: '3', name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin'},
      {id: '4', name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member'},
      {id: '5', name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff'},
      {id: '6', name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member'},
      {id: '7', name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff'},
      {id: '8', name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin'},
      {id: '9', name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member'},
      {id: '10', name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff'},
      {id: '11', name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member'},
      {id: '12', name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff'},
      {id: '13', name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin'},
      {id: '14', name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member'},
      {id: '15', name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff'},
      {id: '16', name: 'Pompeius René', registered: '2018/01/01', role: 'Member'},
      {id: '17', name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff'},
      {id: '18', name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin'},
      {id: '19', name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member'},
      {id: '20', name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff'},
      {id: '21', name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member'},
      {id: '22', name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff'},
      {id: '23', name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member'},
      {id: '42', name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien'}
    ]
  }

  getUser(id: string) {
    return {id: id, name: 'Пётр Петрович Петровидзэ', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!'}
  }

  updateUser(user: User) {
    console.log('user updated', user);
  }

  getActiveResidents() : UserShort[] {
    return [
      {id: '23', name: 'Пётр Досочкин', subscription: new UserSubscription(new Date(2023, 1, 9), new Date(2023, 12, 31), 5), phone: '+7-999-777-8866' },
      {id: '24', name: 'Василий Петечкин', subscription: new UserSubscription(new Date(2023, 1, 9), new Date(2023, 12, 31), 10), phone: '+7-999-777-8866', avatar: 'https://technobalt.com/media/filer_public_thumbnails/filer_public/50/4c/504c2c62-3952-4947-8c29-b62b9e5d5023/contact.png__1170x1170_q85_crop_subsampling-2_upscale.jpg'},
      {id: '25', name: 'Анна Васечкина', subscription: new UserSubscription(new Date(2023, 1, 9), new Date(2023, 12, 31), 55), phone: '+7-999-777-8866' },
      {id: '26', name: 'Пётр Досочкин', subscription: new UserSubscription(new Date(2023, 1, 9), new Date(2023, 12, 31), 93), phone: '+7-999-777-8866' },
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
