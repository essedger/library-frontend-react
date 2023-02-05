import React, { memo } from "react";

import { Form, DatePicker as ADatePicker } from "antd";

import { cx } from "../../utils";

import { DatePickerProps } from "./types";

function DatePicker({
  className,
  label,
  rules,
  name,
  onChange,
  noForm,
  value,
  placeholder,
  defaultValue,
  format,
  size = "middle",
  status,
  ...props
}: DatePickerProps) {
  // const locale = i18next.language === "ru" ? ruRu : enUS;
  const classNames = cx("library-date-picker", className, {
    "library-date-picker--no-form": noForm,
  });
  const dateFormat = "DD/MM/YYYY";

  const handleOnChange = (time: any, dateString: string) => {
    if (dateString && onChange) {
      onChange(dateString);
    } else {
      if (onChange) {
        onChange("");
      }
    }
  };

  if (noForm) {
    return (
      <ADatePicker
        // locale={locale}
        format={dateFormat}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={classNames}
        value={value}
        defaultValue={defaultValue}
        size={size}
        status={status}
        {...props}
      />
    );
  }

  return (
    <Form.Item
      label={label}
      name={name}
      className={classNames}
      colon={false}
      labelAlign="left"
      rules={rules}
    >
      <ADatePicker
        // locale={locale}
        format={dateFormat}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={classNames}
        value={value}
        defaultValue={defaultValue}
        size={size}
        status={status}
        {...props}
      />
    </Form.Item>
  );
}

export default memo(DatePicker);
