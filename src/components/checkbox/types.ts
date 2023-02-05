import { ReactNode } from "react";

import { CheckboxProps } from "antd";
import { Rule } from "rc-field-form/lib/interface";

export interface ICheckboxProps extends CheckboxProps {
  className?: string;
  iconOnly?: boolean;
  testClassName?: string;
  classNameDropdown?: string;
  name?: string;
  label?: ReactNode;
  rules?: Rule[];
  noForm?: boolean;
  checked?: boolean;
}
