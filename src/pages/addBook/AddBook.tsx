import { useState } from "react";

import { Form, message } from "antd";

import { onPostItem } from "../../api/requests/books";
import TextField from "../../components/textField";
import Button from "../../components/button";
import { ButtonTypesEnum } from "../../components/button/types";
import { showMessage } from "../../components/message/message";
import DatePicker from "../../components/datePicker";
import Checkbox from "../../components/checkbox";
import { IBook } from "../../types/entities";
import "./styles.scss";

const AddBookPage = () => {
  // const routeParams = useParams();
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
      New book
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
        <DatePicker
          name="date_start"
          label="Start date"
          placeholder="Start date"
          onChange={onChangeDateStart}
        />
        <DatePicker
          name="date_end"
          label="Finish date"
          placeholder="Finish date"
          onChange={onChangeDateEnd}
        />
        <TextField name="device" label="Device" placeholder="Device" />
        <TextField name="image" label="Image URL" placeholder="Image URL" />
        <Checkbox
          name="is_read"
          label="Finished?"
          onChange={onChangeIsFinished}
          checked={isFinished}
        />
        <TextField name="link" label="Book link" placeholder="Book link" />
        <DatePicker
          name="schedule"
          label="Schedule date"
          placeholder="Schedule date"
          onChange={onChangeScheduleDate}
        />
        <TextField name="source" label="Source" placeholder="Source" />
        <TextField name="type" label="Type" placeholder="Type" />
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
