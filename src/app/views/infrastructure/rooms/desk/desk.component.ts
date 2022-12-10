import {Component, Input, OnInit} from '@angular/core';
import {Desk} from "../../../../models/infrastructure/desk";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnInit {
  @Input() desk: Desk;
  editMode: boolean = false;
  editDeskFormValidated = false;

  public removeDeskModalVisible = false;

  editDeskForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    monthPrice: new FormControl(1, [
      Validators.required,
    ]),
    hourPrice: new FormControl(1, [
      Validators.required,
    ]),
  });

  constructor() { }

  ngOnInit(): void {
    this.editDeskForm.controls.name.setValue(this.desk.name);
    this.editDeskForm.controls.hourPrice.setValue(this.desk.hourPrice);
    this.editDeskForm.controls.monthPrice.setValue(this.desk.monthPrice);
  }

  onDeskClick() {
    this.editMode = !this.editMode;;
  }

  onRemoveDeskClick() {
    this.removeDeskModalVisible = true;
  }

  onEditDeskSubmit() {
    if (this.editDeskForm.valid)
    {
      console.log('Desk edited: ' + this.desk.id);
      this.editMode = false;

      this.desk.name = this.editDeskForm.controls.name.value ?? this.desk.name;
      this.desk.monthPrice = this.editDeskForm.controls.monthPrice.value ?? this.desk.monthPrice;
      this.desk.hourPrice = this.editDeskForm.controls.hourPrice.value ?? this.desk.hourPrice;

      this.editDeskForm.reset(this.desk);
      this.editDeskFormValidated = false;
    }

  }

  onCloseRemoveDeskModal() {
    this.removeDeskModalVisible = false;
  }

  removeDesk() {
    console.log('Desk removed: ' + this.desk.id);
    this.removeDeskModalVisible = false;
  }

  onEditDeskCancel() {
    this.editMode = false;
    this.editDeskForm.reset(this.desk);
    this.editDeskFormValidated = false;
  }

  deskEditFocusOut() {
    if (this.editDeskForm.dirty) {
      this.editDeskFormValidated = true;
    }
  }
}
