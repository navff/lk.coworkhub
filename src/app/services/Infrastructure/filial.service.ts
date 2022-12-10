import { Injectable } from '@angular/core';
import {Filial} from "./filial";

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor() { }

  getFilials(): Filial[] {
    return [
      {
        id: '1',
        name: 'Домик друзей на Андреевской'
      },
      {
        id: '2',
        name: 'Домик друзей на Архангельской'
      }
    ]
  }
}