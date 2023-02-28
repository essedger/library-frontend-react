import React from "react";

import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import { cx } from "../../utils";

const { Content } = Layout;
import "./styles.scss";

const LayoutComponent: React.FC = () => {
  const className = cx("layout-content");
  return (
    <Layout style={{ minHeight: "100vh" }} className="not-auth-layout">
      <Content className={className}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default LayoutComponent;
