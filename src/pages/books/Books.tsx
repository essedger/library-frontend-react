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
  const {
    data: books,
    isLoading: loading,
    refetch,
  } = useBooks({
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
        placeholder="Search by Name or Author"
        allowClear
        enterButton="Search"
        onSearch={onSearch}
        className="mb_32"
        size="large"
      />
      <div className="books-page__items">
        {books?.books?.length ? (
          <Row gutter={[20, 20]}>
            {books?.books?.map((book) => (
              <Col key={book?.id}>
                <BookCard refetch={refetch} {...book} />
              </Col>
            ))}
          </Row>
        ) : (
          <Block>
            <Empty />
          </Block>
        )}
      </div>
      <Block hidden={books && books.totalBooks < 12} className="mt_24">
        <Pagination
          onChange={onChangePage}
          current={activePage}
          defaultPageSize={12}
          total={books && books.totalBooks}
        />
      </Block>

      <LoadingOverlay show={loading} text="Loading..." />
    </div>
  );
};

export default Books;
