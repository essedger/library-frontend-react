import React, { useState } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  BookOutlined,
  PlayCircleOutlined,
  SolutionOutlined,
  CalendarOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { MenuProps, MenuTheme } from "antd";
import { Layout, Menu } from "antd";

import { PATH_NAMES } from "../../routes/constants";
import LayoutHeader from "../LayoutHeader/LayoutHeader";
import { cx } from "../../utils";

const { Content, Sider } = Layout;
// import logo from "./../../assets/lib-logo.png";
import "./styles.scss";

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
  getItem("My Books", "books", <SolutionOutlined />),
  getItem("Favorites", "favorites", <BookOutlined />),
  getItem("In progress", "now", <PlayCircleOutlined />),
  getItem("Scheduled", "scheduled", <CalendarOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
  getItem("Add Book", "add", <PlusOutlined />),
];

const LayoutComponent: React.FC = () => {
  const navigate = useNavigate();
  // const [collapsed, setCollapsed] = useState(false);
  const [themeValue, setThemeValue] = useState<MenuTheme>("dark");
  const [current, setCurrent] = useState("books");
  const className = cx("layout-content", {
    "layout-content__dark": themeValue === "dark",
    "layout-content__light": themeValue === "light",
  });
  const onChangeTheme = (value: boolean) => {
    setThemeValue(value ? "dark" : "light");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(PATH_NAMES[e.key].base);
  };

  return (
    <Layout style={{ minHeight: "100vh" }} className="main-layout">
      <Sider
        theme={themeValue}
        // collapsible
        // collapsed={collapsed}
        // onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 60,
            // margin: 16,
            paddingLeft: 24,
            paddingTop: 16,
            fontSize: 30,
            color: "#ffffff99",
          }}
          className="library-logo"
        >
          <Link to={PATH_NAMES.books.base}>
            {/*<img src={logo}></img>*/}
            Library
          </Link>
        </div>
        <Menu
          theme={themeValue}
          defaultSelectedKeys={["book"]}
          mode="inline"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        />
      </Sider>
      <Layout className="site-layout">
        <LayoutHeader onChangeTheme={onChangeTheme} themeValue={themeValue} />
        <Content>
          <div
            className={className}
            // style={{
            //
            //   backgroundColor: "#ffffff33",
            // }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
