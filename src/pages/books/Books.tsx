import React, { useState } from "react";

import { Col, Empty, Pagination, PaginationProps, Row } from "antd";
import Search from "antd/lib/input/Search";

import BookCard from "../../components/bookCard/BookCard";
import Block from "../../components/block";
import LoadingOverlay from "../../components/loadingOverlay";
import { useBooks } from "../../hooks/useBooks";

import "./styles.scss";

const Books = () => {
  const [activePage, setActivePage] = useState(1);
  const [searchString, setSearchString] = useState<string | undefined>(
    undefined
  );
  const { data: books, isLoading: loading } = useBooks({
    page: activePage,
    search: searchString,
  });

  const onChangePage: PaginationProps["onChange"] = (page) => {
    setActivePage(page);
  };
  const onSearch = (searchValue: string) => {
    setSearchString(searchValue);
  };
  return (
    <div className="books-page">
      <Search
        placeholder="Search by Name and Author"
        allowClear
        enterButton="Search"
        onSearch={onSearch}
        className="mb_32"
        size="large"
      />
      <div className="books-page__items">
        {books?.books?.length ? (
          <Row gutter={[24, 24]}>
            {books?.books?.map((book) => (
              <Col key={book?.id}>
                <BookCard
                  name={book?.name}
                  author={book?.author}
                  image={book?.image}
                  id={book?.id}
                  rating={book?.rating}
                  type={book?.type}
                  device={book?.device}
                  description={book?.description}
                  is_read={book?.is_read}
                  genre={book?.genre}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Block>
            <Empty />
          </Block>
        )}
      </div>

      <Pagination
        onChange={onChangePage}
        current={activePage}
        defaultPageSize={8}
        total={books?.total_pages ? 8 * books?.total_pages : 8}
      />
      <LoadingOverlay show={loading} text="Loading..." />
    </div>
  );
};

export default Books;
