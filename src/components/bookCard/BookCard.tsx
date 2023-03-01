import React, { MouseEvent } from "react";

import { Card, Rate } from "antd";
import { Link } from "react-router-dom";

import { PATH_NAMES } from "../../routes/constants";
// import { getBookTypeIcon } from "../../utils/icons";
import Button from "../button";
import { ButtonTypesEnum } from "../button/types";
import { IBook } from "../../types/entities";
import {
  onAddBookToFavorites,
  onDeleteBookFromFavorites,
} from "../../api/requests/books";
import { useAppSelector } from "../../hooks/reduxHooks";
import "./styles.scss";

interface IBookCard extends IBook {
  refetch: any;
  loading?: boolean;
}

const BookCard = ({
  image,
  name,
  author,
  id,
  genre,
  rating,
  // type,
  device,
  year,
  favoritedBy,
  refetch,
}: IBookCard) => {
  const { me } = useAppSelector((state) => state?.me);
  const isBookInFavoritesForCurrentUser = favoritedBy?.some(
    (userId) => userId?.id === me?.id
  );
  const addToFavorites = async (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (id) {
      if (isBookInFavoritesForCurrentUser) {
        await onDeleteBookFromFavorites(id);
        await refetch();
      } else {
        await onAddBookToFavorites(id);
        await refetch();
      }
    }
  };
  const getFavoritesButtonName = () => {
    if (isBookInFavoritesForCurrentUser) {
      return "Remove from favorites";
    } else {
      return "Add to favorites";
    }
  };
  return (
    <Link to={`${PATH_NAMES.book.base}`.replace(":bookId", `${id}`)}>
      <Card
        key={id}
        className="book-card"
        hoverable
        style={{ width: 400, height: 200 }}
      >
        <div className="book-card__img-container">
          <img className="book-card__img" alt="example" src={image} />
        </div>
        <div className="book-card__info">
          <div className="book-card__info-name">{name}</div>
          <div className="book-card__info-author">{author}</div>
          <div className="book-card__info-genre">{genre}</div>
          <div className="book-card__info-rating">
            <Rate allowHalf defaultValue={rating} disabled />
          </div>
          <div className="book-card__info-year">{year && `Year: ${year}`}</div>
          {/*<div className="book-card__info-type">*/}
          {/*  Device: {getBookTypeIcon(type)}*/}
          {/*</div>*/}
          <div className="book-card__info-device mb_8">{device}</div>
          <div>
            <Button type={ButtonTypesEnum.primary} onClick={addToFavorites}>
              {getFavoritesButtonName()}
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};
export default BookCard;
