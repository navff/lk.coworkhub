export class Toast {
  title: string;
  description: string;
  color: ToastColor;
  visible: boolean;
  delay?: number = 3000;
}

export enum ToastColor {
  success = "success",
  danger = "danger"
};
