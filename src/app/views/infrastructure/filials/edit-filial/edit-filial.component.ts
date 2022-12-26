import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Filial} from "../../../../services/Infrastructure/filial";
import {ToastService} from "../../../../services/Toast/toast.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-filial',
  templateUrl: './edit-filial.component.html',
  styleUrls: ['./edit-filial.component.scss']
})
export class EditFilialComponent implements OnInit {
  formValidated: boolean;

  filial: Filial = new Filial();

  constructor(
    private toastService: ToastService,
    private route: ActivatedRoute) { }

  editFilialForm = new FormGroup({
    name: new FormControl(this.filial.name, [
      Validators.required,
      Validators.minLength(1)
    ])
  });

  ngOnInit(): void {
    this.filial.id = this.route.snapshot.paramMap.get('id') ?? '';
  }

  onSubmit() {
    this.formValidated = true;
    if (this.editFilialForm.valid) {
      this.filial.name = this.editFilialForm.controls.name.value ?? this.filial.name;
      this.editFilialForm.markAsPristine();
      this.toastService.ShowSuccess(
        'Сохранено',
        'Филиал успешно сохранён'
      )
      this.formValidated = false;
    }
  }

  onFocusOut() {
    if (this.editFilialForm.dirty) {
      this.formValidated = true;
    }
  }

  onCancel() {
    this.resetForm();
    this.formValidated = false;
  }

  resetForm(){
    this.editFilialForm.reset(this.filial);
    this.editFilialForm.controls.name.setValue(this.filial.name);
  }
}
