import { ReactNode } from "react";

import { MessageInstance } from "antd/lib/message/interface";
import { NoticeType } from "antd/es/message/interface";

type MessageType = {
  messageApi: MessageInstance;
  content: ReactNode;
  type: NoticeType;
};

export const showMessage = ({ messageApi, content, type }: MessageType) => {
  messageApi.open({
    type: type,
    content: content,
  });
};
