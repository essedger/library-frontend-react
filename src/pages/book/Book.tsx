import { useEffect, useState } from "react";

import { useParams } from "react-router";

import { onGetBook } from "../../api/requests/books";
import { Book } from "../../types/data-contracts";

const BookPage = () => {
  const routeParams = useParams();
  const [book, setBook] = useState<Book>();
  console.log(routeParams);
  useEffect(() => {
    async function getBooks() {
      if (routeParams?.id) {
        const items = await onGetBook(routeParams?.id);
        setBook(items?.data?.[0]);
      }
    }
    getBooks();
  }, [routeParams?.id]);
  return (
    <div>
      <h2>Название: {book?.name}</h2>
      <h2>Автор: {book?.author}</h2>
      <h3>Описание: {book?.description}</h3>
    </div>
  );
};
export default BookPage;
