import { Notification } from "types/entities";
import { notification } from "antd";

const notificationService = {
  show(notificationProps: Notification): void {
    const { type, description, title } = notificationProps;
    notification[type]({
      message: title,
      description: description,
    });
  },
};

export default notificationService;
