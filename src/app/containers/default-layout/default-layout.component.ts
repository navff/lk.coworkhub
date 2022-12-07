import {Component, OnDestroy, OnInit} from '@angular/core';

import { navItems } from './_nav';
import {ToastService} from "../../services/Toast/toast.service";
import {Toast} from "../../services/Toast/Toast";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  providers: [ToastService]
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  toast: Toast = new Toast();
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.needToShowToast
      .subscribe((toast: Toast) => {
        this.toast = toast;
        this.toast.visible = true;
      });
  }

  onToastVisibleChange($event: boolean) {
    this.toast.visible = $event;
  }

  ngOnDestroy(): void {
    this.toastService.needToShowToast.unsubscribe();
  }
}

