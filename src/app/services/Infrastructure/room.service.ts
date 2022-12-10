import { Injectable } from '@angular/core';
import {Room} from "../../models/infrastructure/room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms() : Room[] {
    return [
      {
        id: '1',
        filialId: '1',
        filialName: 'Домик друзей на Андреевской',
        name: 'Первый этаж, стекляшка',
        desks: []
      },
      {
        id: '1',
        filialId: '1',
        filialName: 'Домик друзей на Андреевской',
        name: 'Кторой этаж, П3000',
        desks: [],
      },
      {
        id: '1',
        filialId: '1',
        filialName: 'Домик друзей на Андреевской',
        name: 'Второй этаж, клубы',
        desks: [],
      },
      {
        id: '1',
        filialId: '2',
        filialName: 'Домик друзей на Архангельской',
        name: 'Жаркий кабинет',
        desks: [
          {
            id: '1',
            name: '1. Стол у окна',
            monthPrice: 121,
            hourPrice: 1300
          },
          {
            id: '2',
            name: '2. Стол у туалета',
            monthPrice: 122,
            hourPrice: 1300
          },
          {
            id: '3',
            name: '3. Стол под лестницей',
            monthPrice: 123,
            hourPrice: 1300
          },
        ]
      }
    ]
  }

  public getRoom(id: string): Room {
    return {
      id: '1',
      filialId: '2',
      filialName: 'Домик друзей на Архангельской',
      name: 'Жаркий кабинет',
      desks: [
        {
          id: '1',
          name: '1. Стол у окна',
          monthPrice: 121,
          hourPrice: 1300
        },
        {
          id: '2',
          name: '2. Стол у туалета',
          monthPrice: 122,
          hourPrice: 1300
        },
        {
          id: '3',
          name: '3. Стол под лестницей',
          monthPrice: 123,
          hourPrice: 1300
        },
      ]
    }
  }

  addRoom(room: Room) {
    console.log('Room added: ' + room.name);
  }
}
