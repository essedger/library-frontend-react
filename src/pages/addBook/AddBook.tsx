import { Form, message } from "antd";

import { onPostItem } from "../../api/requests/books";
import { Book } from "../../types/data-contracts";
import TextField from "../../components/textField";
import Button from "../../components/button";
import { ButtonTypesEnum } from "../../components/button/types";
import { showMessage } from "../../components/message/message";
import "./styles.scss";

const AddBookPage = () => {
  // const routeParams = useParams();
  // const [book, setBook] = useState<Book>();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  // useEffect(() => {
  //   async function getBooks() {
  //     if (routeParams?.id) {
  //       const items = await onGetBook(routeParams?.id);
  //       setBook(items?.data?.[0]);
  //     }
  //   }
  //   getBooks();
  // }, [routeParams?.id]);
  // "author": "F. Scott Fitzgerald",
  //   "date_end": "Fri, 28 Feb 2020 00:00:00 GMT",
  //   "date_start": "Sat, 01 Feb 2020 00:00:00 GMT",
  //   "description": "A novel set in the new 2",
  //   "device": "kindle",
  //   "image": "https://edit.org/images/cat/book-covers-big-2019101610.jpg",
  //   "is_read": "True",
  //   "link": "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
  //   "name": "The Great Gatsby 2",
  //   "notes": "Good, but not my favorite 2",
  //   "rating": 1,
  //   "schedule": "1 month",
  //   "source": "Amazon",
  //   "type": "book"
  const onFormValuesChange = () => {};
  const onSubmit = async (values: Book) => {
    console.log(values);
    try {
      await onPostItem(values).then(() => {
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
