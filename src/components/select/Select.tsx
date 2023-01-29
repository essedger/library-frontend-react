import React, { memo } from "react";

import { Form, Select as ASelect } from "antd";

import { cx } from "../../utils";

import { ISelectProps } from "./types";
import "./styles.scss";

const Select = ({
  options,
  className,
  testClassName,
  classNameDropdown,
  name,
  label,
  rules,
  noForm,
  fullWidth,
  mode,
  size,
  ...props
}: ISelectProps) => {
  const classNames = cx("lib-select", className, testClassName, {
    [`lib-select--${name}`]: name,
    "lib-select--no-form": noForm,
    "lib-select--full": fullWidth,
    [`lib-select--${size}`]: size,
  });

  const classNamesDropdown = cx("lib-select-dropdown", classNameDropdown);

  if (noForm) {
    return (
      <ASelect
        size={size}
        className={classNames}
        options={options}
        mode={mode}
        dropdownClassName={classNamesDropdown}
        {...props}
        style={{ ...props.style }}
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
    >
      <ASelect
        size={size}
        options={options}
        mode={mode}
        dropdownClassName={classNamesDropdown}
        {...props}
      />
    </Form.Item>
  );
};

export default memo(Select);
