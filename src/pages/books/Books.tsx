import { useEffect, useState } from "react";

import { Col, Row } from "antd";

import { onGetBooks } from "../../api/requests/books";
import BookCard from "../../components/bookCard/BookCard";
import { Book } from "../../types/data-contracts";
import "./styles.scss";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const items = await onGetBooks();
      setBooks(items?.data);
    }
    getBooks();
  }, []);
  return (
    <div className="books-page">
      <Row gutter={[16, 16]}>
        {books?.map((book: Book) => (
          <Col>
            <BookCard
              image={book?.image}
              author={book?.author}
              id={book?.id}
              name={book?.name}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Books;
