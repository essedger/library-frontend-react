import { useEffect } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { message, Image } from "antd";

import { AppDispatch, RootState } from "../../store/store";
import { fetchBookById, cleanBook } from "../../store/book";
import Block from "../../components/block";
import "./styles.scss";

const BookPage = () => {
  const routeParams = useParams();
  const { book } = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    try {
      if (routeParams?.id) {
        dispatch(fetchBookById(routeParams?.id));
      }
    } catch (err) {
      message.error(err, 5);
    }
    return () => {
      dispatch(cleanBook());
    };
  }, [dispatch, routeParams?.id]);

  return (
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
  );
};
export default BookPage;
