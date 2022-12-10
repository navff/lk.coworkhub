import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Room} from "../../../models/infrastructure/room";
import {ToastService} from "../../../services/Toast/toast.service";
import {RoomService} from "../../../services/Infrastructure/room.service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  addDeskFormValidated = false;

  public newDeskMode: boolean = false;
  public room: Room;

  newDeskForm = new FormGroup({
    name: new FormControl('', [
    ]),
    monthPrice: new FormControl(0, [
    ]),
    hourPrice: new FormControl(0, [
    ]),
  });

  showRemoveRoomModal: boolean = false;

  constructor(
    private toastService: ToastService,
    private roomService: RoomService) { }

  ngOnInit(): void {
    this.room = this.roomService.getRoom('1');
  }

  deskAddFocusOut() {
    if (this.newDeskForm.dirty) {
      this.addDeskFormValidated = true;
    }
  }


  onNewDeskClick() {
    this.newDeskMode = !this.newDeskMode;
  }

  onNewDeskSubmit() {
    if (this.newDeskForm.valid) {
      this.room.name = this.newDeskForm.controls.name.value ?? this.room.name;
      this.toastService.ShowSuccess(
        'Сохранено',
        'Рабочее место добавлено'
      )
    }
    else {
      this.addDeskFormValidated = true;
    }
    this.newDeskForm.reset({name: '', hourPrice: 0, monthPrice: 0});
    this.newDeskMode = false;
    this.addDeskFormValidated = false;
  }

  onNewDeskCancel() {
    this.newDeskForm.reset({name: '', hourPrice: 0, monthPrice: 0});
    this.newDeskMode = false;
    this.addDeskFormValidated = false;
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
