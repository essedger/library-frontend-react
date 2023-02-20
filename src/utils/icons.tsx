import {
  ReadOutlined,
  SoundOutlined,
  QuestionOutlined,
} from "@ant-design/icons";

export const getBookTypeIcon = (type?: string) => {
  switch (type) {
    case "audiobook":
      return <SoundOutlined />;
    case "book":
      return <ReadOutlined />;
    default:
      return <QuestionOutlined />;
  }
};
