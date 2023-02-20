import { Card, Rate } from "antd";
import { Link } from "react-router-dom";

import { Book } from "../../types/data-contracts";
import { PATH_NAMES } from "../../routes/constants";
import { getBookTypeIcon } from "../../utils/icons";
import Block from "../block";
import "./styles.scss";

const BookCard = ({
  image,
  name,
  author,
  id,
  genre,
  rating,
  type,
  device,
}: Book) => {
  return (
    <Link to={`${PATH_NAMES.book.base}`.replace(":id", `${id}`)}>
      <Card
        key={id}
        className="book-card mr_16"
        hoverable
        style={{ width: 515, height: 270 }}
      >
        <div className="book-card__img-container">
          <img className="book-card__img" alt="example" src={image} />
        </div>
        <div className="book-card__info">
          <div className="book-card__info-name">{name}</div>
          <div className="book-card__info-author">{author}</div>
          <div className="book-card__info-genre">{genre}</div>
          <div className="book-card__info-rating">
            <Rate allowHalf defaultValue={rating} />
          </div>
          <Block hidden={!type} className="book-card__info-type">
            {getBookTypeIcon(type)}
          </Block>
          <div className="book-card__info-device">{device}</div>
        </div>
      </Card>
    </Link>
  );
};
export default BookCard;
