import { Component, OnInit } from '@angular/core';
import {PaidService} from "../../../models/infrastructure/paid-service";
import {PaidServiceService} from "../../../services/Infrastructure/paid-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../../services/Toast/toast.service";

@Component({
  selector: 'app-paid-services',
  templateUrl: './paid-services.component.html',
  styleUrls: ['./paid-services.component.scss']
})
export class PaidServicesComponent implements OnInit {
  services: PaidService[];
  addingServiceMode: boolean;

  newServiceForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    price: new FormControl('', [
      Validators.required,
    ])
  });
  addServiceFormValidated: boolean;

  constructor(private paidServiceService: PaidServiceService,
              private toastService: ToastService) { }


  ngOnInit(): void {
    this.services = this.paidServiceService.getServices();
  }

  onAddServicePress() {
    this.addingServiceMode = true;
  }

  onCancelNewService() {
    this.newServiceForm.reset();
    this.addingServiceMode = false;
    this.addServiceFormValidated = false;
  }

  onAddServiceSubmit() {
    this.addServiceFormValidated = true;
    if (this.newServiceForm.valid) {
      const name: string = this.newServiceForm.controls.name.value ?? '';
      const price: number =  + (this.newServiceForm.controls.price.value ?? 0);

      this.paidServiceService.addService(
        {
          name: name,
          price: price,
          id: ''
        });

      this.newServiceForm.markAsPristine();
      this.toastService.ShowSuccess(
        'Сохранено',
        'Услуга успешно добавлена'
      )
      this.addServiceFormValidated = false;
      this.newServiceForm.reset();
      this.addingServiceMode = false;
    }
  }

  onAddServiceFocusOut() {
    if (this.newServiceForm.dirty) {
      this.addServiceFormValidated = true;
    }
  }
}
