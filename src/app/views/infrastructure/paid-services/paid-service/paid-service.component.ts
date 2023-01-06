import {Component, Input, OnInit} from '@angular/core';
import {PaidService} from "../../../../models/infrastructure/paid-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Desk} from "../../../../models/infrastructure/desk";

@Component({
  selector: 'app-paid-service',
  templateUrl: './paid-service.component.html',
  styleUrls: ['./paid-service.component.scss']
})
export class PaidServiceComponent implements OnInit {
  @Input() service: PaidService;
  editMode: boolean = false;
  editServiceFormValidated = false;

  public removeServiceModalVisible = false;

  editServiceForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    price: new FormControl(1, [
      Validators.required,
    ]),
  });

  constructor() { }

  ngOnInit(): void {
    this.editServiceForm.controls.name.setValue(this.service.name);
    this.editServiceForm.controls.price.setValue(this.service.price);
  }

  onServiceClick() {
    this.editMode = !this.editMode;;
  }

  onRemoveServiceClick() {
    this.removeServiceModalVisible = true;
  }

  onEditServiceSubmit() {
    if (this.editServiceForm.valid)
    {
      console.log('Service edited: ' + this.service.id);
      this.editMode = false;

      this.service.name = this.editServiceForm.controls.name.value ?? this.service.name;
      this.service.price = this.editServiceForm.controls.price.value ?? this.service.price;

      this.editServiceForm.reset(this.service);
      this.editServiceFormValidated = false;
    }

  }

  onCloseRemoveServiceModal() {
    this.removeServiceModalVisible = false;
  }

  removeService() {
    console.log('Service removed: ' + this.service.id);
    this.removeServiceModalVisible = false;
  }

  onEditServiceCancel() {
    this.editMode = false;
    this.editServiceForm.reset(this.service);
    this.editServiceFormValidated = false;
  }

  serviceEditFocusOut() {
    if (this.editServiceForm.dirty) {
      this.editServiceFormValidated = true;
    }
  }

}
