import React, { memo } from "react";

import { Avatar as AAvatar } from "antd";
import { AvatarProps } from "antd/lib/avatar/avatar";

import { cx } from "../../utils";

type LibAvatarProps = {
  className?: string;
};

function Avatar({
  className,
  children,
  ...props
}: LibAvatarProps & AvatarProps) {
  const classNames = cx("lib-avatar", className);
  return (
    <AAvatar
      className={classNames}
      style={{ backgroundColor: "#E9E9E9", color: "#1E1E1E" }}
      {...props}
    >
      {children}
    </AAvatar>
  );
}

export default memo(Avatar);
