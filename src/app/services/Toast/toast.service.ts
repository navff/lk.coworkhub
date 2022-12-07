import {EventEmitter, Injectable} from '@angular/core';
import {Toast, ToastColor} from "./Toast";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  needToShowToast = new EventEmitter<Toast>();

  constructor() { }

  public ShowSuccess(title: string, description: string) {
    this.needToShowToast.emit(
      {
        title: title,
        description: description,
        color: ToastColor.success,
        visible: true,
        delay: 3000
      });
  }

  public ShowError(title: string, description: string) {
    this.needToShowToast.emit(
      {
        title: title,
        description: description,
        color: ToastColor.danger,
        visible: true,
        delay: 5000
      });
  }

}
