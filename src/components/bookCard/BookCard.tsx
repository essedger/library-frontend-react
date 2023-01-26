import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";

import { Book } from "../../types/data-contracts";
import { PATH_NAMES } from "../../routes/constants";
import "./styles.scss";

const BookCard = ({ image, name, author, id }: Book) => {
  return (
    <Link to={`${PATH_NAMES.book.base}`.replace(":id", `${id}`)}>
      <Card
        hoverable
        className="book-card mr_16"
        style={{ width: 200 }}
        key={id}
        cover={<img className="book-card__img" alt="example" src={image} />}
      >
        <Meta title={name} description={author} />
      </Card>
    </Link>
  );
};
export default BookCard;
