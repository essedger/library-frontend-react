import React, { memo } from "react";

import { Checkbox as ACheckbox } from "antd";

import { cx } from "../../utils";

import { ICheckboxProps } from "./types";

function Checkbox({ className, iconOnly, ...props }: ICheckboxProps) {
  const classNames = cx("lib-checkbox", className, {
    "lib-checkbox--icon": iconOnly,
  });
  return <ACheckbox className={classNames} {...props} />;
}

export default memo(Checkbox);
