import React, { useMemo } from "react";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { TextAreaProps } from "antd/lib/input/TextArea";

import { cx } from "../../utils";

import { ITextField, TextFieldTypeEnum } from "./types";

const { TextArea } = Input;

function TextFieldPassword(props: ITextField) {
  return (
    <Input.Password
      {...props}
      iconRender={(visible) =>
        visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
      }
    />
  );
}

function TextFieldArea(props: TextAreaProps) {
  return <TextArea {...props} />;
}

function TextField({
  className,
  name,
  label,
  rules,
  type,
  noForm,
  normalize,
  dependencies,
  hasFeedback,
  ...props
}: ITextField) {
  const classNames = cx("lib-text-field", className, {
    [`lib-text-field--${name}`]: name,
    "lib-text-field--no-form": noForm,
    [`lib-text-field--${props.size}`]: props.size,
  });

  const Component = useMemo(() => {
    if (type === TextFieldTypeEnum.password) {
      return TextFieldPassword;
    }
    if (type === TextFieldTypeEnum.textArea) {
      return TextFieldArea;
    }
    return Input;
  }, [type]);

  if (noForm) {
    return (
      <Component
        className={classNames}
        name={name}
        {...props}
        autoComplete="off"
      />
    );
  }

  return (
    <Form.Item
      label={label}
      name={name}
      className={classNames}
      colon={false}
      labelAlign="left"
      rules={rules}
      normalize={normalize}
      dependencies={dependencies}
      hasFeedback={hasFeedback}
    >
      <Component {...props} autoComplete="off" />
    </Form.Item>
  );
}

TextField.defaultProps = {
  type: TextFieldTypeEnum.text,
};

export default TextField;
