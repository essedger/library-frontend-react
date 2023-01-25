import React, { useState } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  BookOutlined,
  PlayCircleOutlined,
  SolutionOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

import { PATH_NAMES } from "../../routes/constants";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Library", "books", <SolutionOutlined />),
  getItem("Favorites", "favorites", <BookOutlined />),
  getItem("In progress", "now", <PlayCircleOutlined />),
  getItem("Scheduled", "scheduled", <CalendarOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 56,
            // margin: 16,
            paddingLeft: 24,
            paddingTop: 16,
            fontSize: 30,
            color: "#ffffff99",
          }}
        >
          <Link to={PATH_NAMES.books.base}>Library</Link>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(el) => navigate(PATH_NAMES[el.key].base)}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: "#011529",
            borderLeft: '1px, solid, "#011529"',
          }}
        />
        <Content style={{}}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: "#ffffff33",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
