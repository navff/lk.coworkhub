import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/People/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../models/People/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../../services/Toast/toast.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User = new User();
  formValidated: boolean;

  editUserForm = new FormGroup({
    name: new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(1)
    ]),
    role: new FormControl(this.user.role, [
      Validators.required
    ])
  });

  constructor(private userService: UsersService,
              private route: ActivatedRoute,
              private router: Router,
              private toastService: ToastService,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user = this.userService.getUser(params['id']);
      this.resetForm();
    })

  }

  onSubmit() {
    this.formValidated = true;
    if (this.editUserForm.valid) {
      this.user.name = this.editUserForm.controls.name.value ?? this.user.name;
      this.user.role = this.editUserForm.controls.role.value ?? this.user.role;
      this.editUserForm.markAsPristine();
      this.userService.updateUser(this.user);
      this.toastService.ShowSuccess(
        'Сохранено',
        'Пользователь успешно сохранён'
      )
      this.formValidated = false;
    }
  }

  onFocusOut() {
    if (this.editUserForm.dirty) {
      this.formValidated = true;
    }
  }

  onCancel() {
    this.resetForm();
    this.formValidated = false;
  }

  resetForm(){
    this.editUserForm.reset(this.user);
    this.editUserForm.controls.name.setValue(this.user.name);
    this.editUserForm.controls.role.setValue(this.user.role);
    this.editUserForm.markAsPristine();
  }
}
