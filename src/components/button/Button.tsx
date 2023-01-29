import React, { memo } from "react";

import { Button as AntButton } from "antd";

import { cx } from "../../utils";

import { ButtonTypesEnum, IButton } from "./types";

function Button({
  children,
  className,
  fullWidth,
  type = ButtonTypesEnum.default,
  loading,
  size,
  disabled,
  hintText,
  ...props
}: IButton) {
  const classNames = cx("lib-button", className, {
    [`lib-button--${size}`]: size,
  });

  return (
    <AntButton
      loading={loading}
      size={size}
      type={type}
      disabled={disabled}
      className={classNames}
      {...props}
    >
      {children}
    </AntButton>
  );
}

export default memo(Button);
