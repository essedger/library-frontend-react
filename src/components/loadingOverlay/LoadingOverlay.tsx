import React from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import "./styles.scss";

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

type LoadingOverlayProps = {
  text?: string;
  show?: boolean;
};

function LoadingOverlay({ text, show }: LoadingOverlayProps) {
  if (!show) {
    return null;
  }
  return (
    <div className="loading-overlay">
      <Spin indicator={antIcon} />
      <span className="loading-overlay__text">{text}</span>
    </div>
  );
}

export default LoadingOverlay;
