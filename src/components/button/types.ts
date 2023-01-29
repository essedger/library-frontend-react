import { ButtonProps } from "antd/lib/button/button";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export interface IButton extends ButtonProps {
  fullWidth?: boolean;
  colored?: boolean;
  type?: ButtonTypesEnum;
  size?: SizeType;
  hintText?: string;
  variant?: ButtonVariantEnum;
}

export enum ButtonVariantEnum {
  icon = "icon",
  iconBox = "icon-box",
  secondary = "secondary",
}

export enum ButtonTypesEnum {
  default = "default",
  primary = "primary",
  text = "text",
  link = "link",
}
