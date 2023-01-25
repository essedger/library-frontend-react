import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

import "./styles.scss";
import { Book } from "../../types/data-contracts";

const BookCard = ({ image, name, author, id }: Book) => {
  return (
    <Card
      hoverable
      className="book-card mr_16"
      style={{ width: 320, height: 440 }}
      key={id}
      cover={<img className="book-card__img" alt="example" src={image} />}
    >
      <Meta title={name} description={author} />
    </Card>
  );
};
export default BookCard;
