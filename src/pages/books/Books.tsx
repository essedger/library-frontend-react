import { useEffect, useState } from "react";

import { Col, Empty, Row } from "antd";

import { onGetBooks } from "../../api/requests/books";
import BookCard from "../../components/bookCard/BookCard";
import { Book } from "../../types/data-contracts";
import "./styles.scss";
import LoadingOverlay from "../../components/loadingOverlay";
import Block from "../../components/block";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getBooks() {
      setLoading(true);
      const items = await onGetBooks();
      setBooks(items?.data);
      setLoading(false);
    }
    getBooks();
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
        <Block hidden={loading}>
          <Empty />
        </Block>
      )}
      <LoadingOverlay show={loading} text="Loading..." />
    </div>
  );
}
export default Books;
