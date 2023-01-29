import React, { memo } from "react";

import { Collapse as ACollapse } from "antd";
import { CollapseProps } from "antd/lib/collapse/Collapse";

import { cx } from "../../utils";

interface LibCollapseProps extends CollapseProps {
  className?: string;
  children: React.ReactNode;
}

function Collapse({ className, children, ...props }: LibCollapseProps) {
  const classNames = cx("lib-collapse", className);
  return (
    <ACollapse className={classNames} {...props}>
      {children}
    </ACollapse>
  );
}

export default memo(Collapse);
