import { Rule } from "rc-field-form/lib/interface";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { InputStatus } from "antd/lib/_util/statusUtils";

export interface DatePickerProps {
  className?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  rules?: Rule[];
  noForm?: boolean;
  onChange?: (timeString: string) => void;
  format?: string;
  value?: any;
  defaultValue?: any;
  size?: SizeType;
  disabledDate?: (date: any) => boolean;
  disabled?: boolean;
  status?: InputStatus;
  open?: boolean;
  showTime?: boolean;
}
