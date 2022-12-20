import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Room} from "../../../../models/infrastructure/room";
import {RoomService} from "../../../../services/Infrastructure/room.service";
import {ToastService} from "../../../../services/Toast/toast.service";
import {Filial} from "../../../../services/Infrastructure/filial";

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss'],
  providers: [RoomService]
})
export class EditRoomComponent implements OnInit {

  editRoomFormValidated = false;

  @Input() room: Room = new Room();
  @Input() roomId: string;
  @Output() onAdd: EventEmitter<Room> = new EventEmitter<Room>();
  @Output() onCancelled: EventEmitter<any> = new EventEmitter<any>();

  editRoomForm = new FormGroup({
    name: new FormControl(this.room.name, [
      Validators.required,
      Validators.minLength(1)
    ]),
    filial: new FormControl(this.room.filialId, [
      Validators.required,
    ])
  });

  constructor(
    private roomService: RoomService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    if (this.roomId) {
      this.room = this.roomService.getRoom('1');
    }
    this.resetForm();
  }

  onRoomEditSubmit() {
    this.editRoomFormValidated = true;
    if (this.editRoomForm.valid) {
      this.room.name = this.editRoomForm.controls.name.value ?? this.room.name;
      this.room.filialId = this.editRoomForm.controls.filial.value ?? this.room.filialId;
      this.editRoomForm.markAsPristine();
      this.toastService.ShowSuccess(
        'Сохранено',
        'Кабинет успешно сохранён'
      )
      this.onAdd.emit(this.room);
      console.log(this.room);
      this.editRoomFormValidated = false;
    }
  }

  roomEditFocusOut() {
    if (this.editRoomForm.dirty) {
      this.editRoomFormValidated = true;
    }
  }

  onCancelClick() {
    this.resetForm();
    this.editRoomFormValidated = false;
    this.onCancelled.emit();
  }

  onSelectFilial(filial: Filial) {
    this.editRoomForm.controls.filial.setValue(filial.id);
    this.editRoomForm.markAsDirty();
    console.log(this.editRoomForm.controls.filial.value);
  }

  resetForm(){
    this.editRoomForm.reset(this.room);
    this.editRoomForm.controls.filial.setValue(this.room.filialId);
    this.editRoomForm.controls.name.setValue(this.room.name);
  }
}
