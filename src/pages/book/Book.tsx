import { useEffect } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import { AppDispatch, RootState } from "../../store/store";
import { fetchBookById, cleanBook } from "../../store/book";

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
    <div>
      <h2>Название: {book?.name}</h2>
      <h2>Автор: {book?.author}</h2>
      <h3>Описание: {book?.description}</h3>
    </div>
  );
};
export default BookPage;
