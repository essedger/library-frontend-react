import React from "react";

import { Form } from "antd";
import { useNavigate } from "react-router-dom";

import TextField from "../../components/textField";
import Button from "../../components/button";
import { ButtonTypesEnum } from "../../components/button/types";
import { TextFieldTypeEnum } from "../../components/textField/types";
import { ILogin } from "../../types/entities/auth";
import { onLogin } from "../../api/requests/auth";
import { localStorageService } from "../../services/localStorageService";
import { PATH_NAMES } from "../../routes/constants";
import "./styles.scss";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onSubmit = async (values: ILogin) => {
    const { data } = await onLogin(values);
    const token = data?.token;
    if (token) {
      localStorageService.setAuthData(token);
      navigate(PATH_NAMES.books.base);
    }
  };
  const onSignUp = () => {
    navigate(PATH_NAMES.auth.signup);
  };
  return (
    <div className="login-page">
      <div className="login-page__form">
        <h2>Login into your book world :)</h2>
        <Form
          form={form}
          layout="vertical"
          style={{ maxWidth: 600 }}
          onFinish={onSubmit}
        >
          <TextField name="email" label="Email" placeholder="Email" />
          <TextField
            type={TextFieldTypeEnum.password}
            name="password"
            label="Password"
            placeholder="Password"
          />
          <Button htmlType="submit" type={ButtonTypesEnum.primary}>
            Login
          </Button>
        </Form>
        <Button type={ButtonTypesEnum.link} onClick={onSignUp}>
          Sign up
        </Button>
      </div>
    </div>
  );
};
export default Login;
