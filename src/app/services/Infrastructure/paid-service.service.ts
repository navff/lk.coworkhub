import {Injectable} from "@angular/core";
import {PaidService} from "../../models/infrastructure/paid-service";

@Injectable({
  providedIn: 'root'
})
export class PaidServiceService {

  constructor() { }

  getServices(): PaidService[] {
    return [
      {
        id: '1',
        name: 'Печать на принтере (лист)',
        price: 10,
      },
      {
        id: '2',
        name: 'Сканирование (лист)',
        price: 10
      }
    ]
  }

  addService(paidService: PaidService) {
    console.log('Service saved');
  }
}
