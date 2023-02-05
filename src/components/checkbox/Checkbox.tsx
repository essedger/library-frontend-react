import React, { memo } from "react";

import { Checkbox as ACheckbox, Form } from "antd";

import { cx } from "../../utils";

import { ICheckboxProps } from "./types";

function Checkbox({
  className,
  iconOnly,
  name,
  label,
  rules,
  noForm,
  checked,
  ...props
}: ICheckboxProps) {
  const classNames = cx("lib-checkbox", className, {
    "lib-checkbox--icon": iconOnly,
  });
  if (noForm) {
    return <ACheckbox className={classNames} {...props} />;
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
      <ACheckbox className={classNames} checked={checked} {...props} />
    </Form.Item>
  );
}

export default memo(Checkbox);
