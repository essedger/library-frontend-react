import { InputProps } from "antd/lib/input";
import { Rule } from "rc-field-form/lib/interface";
import { TextAreaProps } from "antd/lib/input/TextArea";

type MergedProps = InputProps & TextAreaProps;

export interface ITextField extends MergedProps {
  prefix?: any;
  normalize?: any;
  className?: string;
  name?: string;
  label?: string;
  rules?: Rule[];
  type?: TextFieldTypeEnum;
  noForm?: boolean;
  ref?: any;
}

export enum TextFieldTypeEnum {
  text = "text",
  password = "password",
  textArea = "textArea",
}
