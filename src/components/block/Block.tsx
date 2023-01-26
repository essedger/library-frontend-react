import React, { memo, ReactNode, RefObject } from "react";

import "./styles.scss";
import { cx } from "../../utils";

type BlockProps = {
  children?: ReactNode;
  className?: string;
  hidden?: boolean | null;
  invisible?: boolean | null;
  empty?: boolean;
  item?: boolean;
  blockRef?: RefObject<any>;
  onClick?: () => void;
};
//TODO change to React OffScreen after realise
function Block({
  children,
  className,
  hidden,
  invisible,
  empty,
  item,
  blockRef,
  onClick,
}: BlockProps) {
  const classNames = cx("block", className, {
    "block--invisible": invisible,
  });

  if (hidden) {
    return null;
  }

  if (empty) {
    return <>{children}</>;
  }

  if (item) {
    return (
      <span ref={blockRef} className={classNames}>
        {children}
      </span>
    );
  }

  return (
    <div
      role={onClick ? "button" : "none"}
      onClick={onClick}
      ref={blockRef}
      className={classNames}
    >
      {children}
    </div>
  );
}

export default memo(Block);
