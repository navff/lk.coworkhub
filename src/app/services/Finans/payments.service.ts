import { Injectable } from '@angular/core';
import {Payment} from "../../models/Finans/payment";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor() { }

  getPayments() : Payment[] {
    return [
      {id: '1', externalId: '1', amount: 1, date: '2022-12-31 15:34', cardHolder: 'Vladimir Varnavskiy', maskedCard: 'XXX-9999', method: 'SBP', userId: '1'},
      {id: '2', externalId: '2', amount: 2, date: '2022-12-31 15:34', cardHolder: 'Petya', maskedCard: 'XXX-1234', method: 'QR', userId: '2'},
      {id: '3', externalId: '3', amount: 3, date: '2022-11-30 15:34', cardHolder: 'Vova', maskedCard: 'XXX-2345', method: 'SBP', userId: '3'},
      {id: '4', externalId: '4', amount: 4, date: '2022-12-31 15:34', cardHolder: 'Katya', maskedCard: 'XXX-3456', method: 'Tinkoff', userId: '1'},
      {id: '5', externalId: '5', amount: 5, date: '2022-12-31 15:34', cardHolder: 'Nadezhda Varnavskaya', maskedCard: 'XXX-4567', method: 'SBP', userId: '2'},
      {id: '6', externalId: '6', amount: 6, date: '2022-12-31 15:34', cardHolder: 'Konstatnin Konstatinopolskiy', maskedCard: 'XXX-5678', method: 'Sber', userId: '3'},
    ]
  }
}
