import { useState } from "react";

import { Form, message } from "antd";

import { onPostItem } from "../../api/requests/books";
import TextField from "../../components/textField";
import Button from "../../components/button";
import { ButtonTypesEnum } from "../../components/button/types";
import { showMessage } from "../../components/message/message";
import DatePicker from "../../components/datePicker";
import { IBook } from "../../types/entities";
import Select from "../../components/select";
import {
  bookDeviceSelectOptions,
  bookTypesSelectOptions,
  langArrayOptions,
} from "../../constants";
import "./styles.scss";

const AddBookPage = () => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const onChangeDateStart = (value: string) => {
    if (value?.length) {
      setDateStart(value);
    } else {
      setDateStart("");
    }
  };
  const onChangeScheduleDate = (value: string) => {
    if (value?.length) {
      setScheduleDate(value);
    } else {
      setScheduleDate("");
    }
  };

  const onChangeDateEnd = (value: string) => {
    if (value?.length) {
      setDateEnd(value);
    } else {
      setDateEnd("");
    }
  };
  const onChangeIsFinished = () => {
    setIsFinished(!isFinished);
  };

  const onFormValuesChange = () => {};
  const onSubmit = async (values: IBook) => {
    const sendValues = {
      ...values,
      date_start: dateStart,
      date_end: dateEnd,
      schedule: scheduleDate,
      is_read: isFinished,
    };
    // console.warn(sendValues);
    try {
      await onPostItem(sendValues).then(() => {
        form.resetFields();
        showMessage({
          messageApi,
          content: "Book added successfully",
          type: "success",
        });
      });
    } catch {
      showMessage({
        messageApi,
        content: "Error",
        type: "error",
      });
    }
  };
  return (
    <div className="add-book-page">
      <h1>Create new book</h1>
      <Form
        form={form}
        layout="vertical"
        // initialValues={{}}
        onValuesChange={onFormValuesChange}
        style={{ maxWidth: 600 }}
        onFinish={onSubmit}
      >
        <TextField
          rules={[{ required: true, message: "Please input name!" }]}
          name="name"
          label="Name"
          placeholder="Name"
        />
        <TextField
          rules={[{ required: true, message: "Please input author!" }]}
          name="author"
          label="Author"
          placeholder="Author"
        />
        <TextField
          name="description"
          label="Description"
          placeholder="Description"
        />
        <div className="flex-align-items--center flex-row">
          <DatePicker
            name="date_start"
            label="Start date"
            placeholder="Start date"
            onChange={onChangeDateStart}
            className="mr_8"
          />
          <DatePicker
            name="date_end"
            label="Finish date"
            placeholder="Finish date"
            onChange={onChangeDateEnd}
            className="mr_8"
          />
          <DatePicker
            name="schedule"
            label="Read schedule date"
            placeholder="Schedule date"
            onChange={onChangeScheduleDate}
            className="mr_8"
          />
        </div>
        <TextField name="image" label="Image URL" placeholder="Image URL" />
        <Select
          name="language"
          label="Language"
          placeholder="Language"
          options={langArrayOptions}
          optionFilterProp="label"
          showSearch
        />
        <TextField
          name="year"
          label="Year"
          placeholder="Year"
          rules={[
            {
              message: "Please year by numbers",
            },
            () => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject();
                }
                if (isNaN(value)) {
                  return Promise.reject("Year has to be a number.");
                }
                if (value.length < 4) {
                  return Promise.reject("Year can't be less than 4 digits");
                }
                if (value.length > 4) {
                  return Promise.reject("Year can't be more than 4 digits");
                }
                return Promise.resolve();
              },
            }),
          ]}
        />
        <TextField
          name="link"
          label="Book purchase link"
          placeholder="Book purchase link"
        />
        <TextField name="source" label="Link to file" placeholder="Link" />
        <Select
          name="type"
          label="Type"
          placeholder="Type"
          options={bookTypesSelectOptions}
        />
        <Select
          name="device"
          label="Device"
          placeholder="Device"
          options={bookDeviceSelectOptions}
        />
        <TextField name="notes" label="Notes" placeholder="Notes" />
        <Form.Item>
          <Button htmlType="submit" type={ButtonTypesEnum.primary}>
            Add book
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </div>
  );
};
export default AddBookPage;
