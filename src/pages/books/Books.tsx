import { useEffect, useState } from "react";

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
    <div className="books">
      {books?.map((book: Book) => (
        <BookCard
          image={book?.image}
          author={book?.author}
          id={book?.id}
          name={book?.name}
        />
      ))}
    </div>
  );
}
export default Books;
