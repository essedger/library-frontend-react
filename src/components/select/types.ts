import { ReactNode } from "react";

import { SelectProps } from "rc-select/lib/Select";
import { Rule } from "rc-field-form/lib/interface";
import { InputStatus } from "antd/lib/_util/statusUtils";
import { SizeType } from "antd/lib/config-provider/SizeContext";

import { TextFieldTypeEnum } from "../textField/types";

export interface ISelectProps extends SelectProps {
  className?: string;
  testClassName?: string;
  classNameDropdown?: string;
  name?: string;
  label?: ReactNode;
  rules?: Rule[];
  type?: TextFieldTypeEnum;
  noForm?: boolean;
  placeholder?: string;
  mode?: any;
  fullWidth?: boolean;
  size?: SizeType;
  status?: InputStatus;
}
