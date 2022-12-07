import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Desk} from "../../../models/infrastructure/desk";
import {Room} from "../../../models/infrastructure/room";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  editRoomFormValidated = false;

  public newDeskMode: boolean = false;
  public room: Room = {
    id: '1',
    name: 'Жаркий кабинет',
    imageFilePath: '',
    imageUrl: '',
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
  };

  editRoomForm = new FormGroup({
    name: new FormControl(this.room.name, [
      Validators.required,
      Validators.minLength(1),
    ]),
    filePath: new FormControl(this.room.imageFilePath)
  });

  newDeskForm = new FormGroup({
    name: new FormControl(''),
    monthPrice: new FormControl(''),
    hourPrice: new FormControl(''),
  });

  showRemoveRoomModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onRoomEditSubmit() {
    this.editRoomFormValidated = true;
    if (this.editRoomForm.valid) {
      this.room.name = this.editRoomForm.controls.name.value ?? this.room.name;
      console.log(this.room.name);
    }
  }

  roomEditFocusOut() {
    if (this.editRoomForm.dirty) {
      this.editRoomFormValidated = true;
    }
  }

  onNewDeskClick() {
    this.newDeskMode = !this.newDeskMode;
  }

  onNewDeskSubmit() {
    console.log(this.newDeskForm.controls.name.value);
    this.newDeskForm.reset();
    this.newDeskMode = false;
  }

  onNewDeskCancel() {
    this.newDeskMode = false;
  }

  onRemoveRoomClick() {
    this.showRemoveRoomModal = true;
  }

  onCloseRemoveRoomModal() {
    this.showRemoveRoomModal = false;
  }

  removeRoom() {
    console.log("Room removed: " + this.room.id);
    this.showRemoveRoomModal = false;
  }

}
