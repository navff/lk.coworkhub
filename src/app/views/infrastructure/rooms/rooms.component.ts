import { Component, OnInit } from '@angular/core';
import {Room} from "../../../models/infrastructure/room";
import {RoomService} from "../../../services/Infrastructure/room.service";
import {Filial} from "../../../services/Infrastructure/filial";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers: [RoomService]
})
export class RoomsComponent implements OnInit {
  rooms: Room[];
  roomAddingMode = false;
  selectedFilialId: string;
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.rooms = this.roomService.getRooms();
  }

  onAddRoomClick() {
    this.roomAddingMode = true;
  }

  onRoomAdd(room: Room) {
    this.roomAddingMode = false;
    this.roomService.addRoom(room)
  }

  onRoomAddCancelled() {
    this.roomAddingMode = false;
  }

  onSelectFilial(filial: Filial) {
    console.log('Отфильтровать кабинеты по филиалу');
    console.log(filial);
    this.selectedFilialId = filial.id;
  }
}
