import React from "react";

import { useParams } from "react-router";
import { Image } from "antd";

import Block from "../../components/block";
import { useBook } from "../../hooks/useBook";
import LoadingOverlay from "../../components/loadingOverlay";
import "./styles.scss";

const BookPage = () => {
  const routeParams = useParams();
  const { data: book, isLoading: loading } = useBook(routeParams?.bookId);
  return (
    <>
      <Block className="book-page" hidden={!book}>
        <div className="book-page__main">
          <div className="book-page__main__image mr_24">
            <Image width={300} src={book?.image} preview={false} />
          </div>
          <div className="book-page__main__info">
            <h2>Название: {book?.name}</h2>
            <h2>Автор: {book?.author}</h2>
          </div>
        </div>
        <h3>Описание: {book?.description}</h3>
      </Block>
      <LoadingOverlay show={loading} text="Loading..." />
    </>
  );
};
export default BookPage;
