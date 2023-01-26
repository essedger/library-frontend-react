export type Notification = {
  timeout?: number;
  title?: string;
  description?: string;
  type: NotificationType;
};

export enum NotificationType {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
}
