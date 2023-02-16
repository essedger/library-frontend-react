import { useEffect } from "react";

import { Col, Empty, message, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

import BookCard from "../../components/bookCard/BookCard";
import { Book } from "../../types/data-contracts";
import Block from "../../components/block";
import { AppDispatch, RootState } from "../../store/store";
import { cleanBooks, fetchBooks } from "../../store/books";
import "./styles.scss";

const Books = () => {
  const { books } = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    try {
      dispatch(fetchBooks());
    } catch (err) {
      message.error(err, 5);
    }
    return () => {
      dispatch(cleanBooks());
    };
  }, []);

  return (
    <div className="books-page">
      {books?.length ? (
        <Row gutter={[24, 24]}>
          {books?.map((book: Book) => (
            <Col key={book?.id}>
              <BookCard
                image={book?.image}
                author={book?.author}
                id={book?.id}
                name={book?.name}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Block>
          <Empty />
        </Block>
      )}
      {/*<LoadingOverlay show={loading} text="Loading..." />*/}
    </div>
  );
};
export default Books;
