import React from "react";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Switch } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { cx } from "../../utils";
import Block from "../block";
import { PATH_NAMES } from "../../routes/constants";
import "./styles.scss";

type LayoutHeaderType = {
  themeValue: string;
  onChangeTheme: (value: boolean) => void;
};

const LayoutHeader = ({ themeValue, onChangeTheme }: LayoutHeaderType) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onBackNavigate = () => {
    navigate(-1);
  };
  const className = cx("layout-header", {
    "layout-header__dark": themeValue === "dark",
    "layout-header__light": themeValue === "light",
  });
  console.log(location);
  return (
    <div className={className}>
      <div>
        <Block hidden={!location.pathname.includes("/book/")}>
          <Button
            onClick={onBackNavigate}
            shape="circle"
            icon={<ArrowLeftOutlined />}
          />
        </Block>
      </div>
      <div>
        <Switch
          checked={themeValue === "dark"}
          onChange={onChangeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          className="mr_16"
        />
        {/*<Button type="primary" onClick={onNewItemPageNavigate}>Add book</Button>*/}
        {/*<Avatar style={{backgroundColor: '#FFFFFF'}} icon={<UserOutlined style={{color: '#000000'}} />} />*/}
      </div>
    </div>
  );
};
export default LayoutHeader;
