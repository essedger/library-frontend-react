import { notification } from "antd";

import { Notification } from "../types/entities";

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
