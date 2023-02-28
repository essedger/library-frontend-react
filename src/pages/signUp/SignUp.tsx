import React from "react";

import { useNavigate } from "react-router-dom";
import { Form } from "antd";

import { ILogin } from "../../types/entities/auth";
import { onLogin, onRegister } from "../../api/requests/auth";
import TextField from "../../components/textField";
import { TextFieldTypeEnum } from "../../components/textField/types";
import Button from "../../components/button/Button";
import { ButtonTypesEnum } from "../../components/button/types";
import { localStorageService } from "../../services/localStorageService";
import { PATH_NAMES } from "../../routes/constants";
import "./styles.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onSubmit = async (values: ILogin) => {
    const { data } = await onRegister(values);
    if (data?.user) {
      const loginData = await onLogin(values);
      const token = loginData?.data?.token;
      if (token) {
        localStorageService.setAuthData(token);
        navigate(PATH_NAMES.books.base);
      }
    }
  };
  return (
    <div className="signup-page">
      <div className="signup-page__form">
        <h2>Sign up</h2>
        <Form
          form={form}
          layout="vertical"
          style={{ maxWidth: 600 }}
          onFinish={onSubmit}
        >
          <TextField
            name="email"
            label="Email"
            placeholder="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          />
          <TextField
            type={TextFieldTypeEnum.password}
            name="password"
            label="Password"
            placeholder="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          />
          <TextField
            type={TextFieldTypeEnum.password}
            name="confirm-password"
            label="Confirm password"
            placeholder="Confirm password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords don`t match!")
                  );
                },
              }),
            ]}
          />
          <Button htmlType="submit" type={ButtonTypesEnum.primary}>
            Sign up
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
