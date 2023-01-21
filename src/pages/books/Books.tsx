import { useEffect, useState } from 'react';

import { onGetBooks } from '../../api/requests/books';
import BookCard from '../../components/bookCard/BookCard';
import './styles.scss';
import { Book } from '../../types/entities/book';
function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const items = await onGetBooks();
      setBooks(items?.data?.books);
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
