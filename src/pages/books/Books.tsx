import React, { useEffect, useState } from "react";

import { Col, Empty, Pagination, PaginationProps, Row } from "antd";
import Search from "antd/lib/input/Search";
import { useLocation } from "react-router-dom";

import BookCard from "../../components/bookCard/BookCard";
import Block from "../../components/block";
import LoadingOverlay from "../../components/loadingOverlay";
import { useBooks } from "../../hooks/useBooks";
import { PATH_NAMES } from "../../routes/constants";
import "./styles.scss";

const Books = () => {
  const [activePage, setActivePage] = useState(1);
  const location = useLocation();
  const [searchString, setSearchString] = useState<string | undefined>(
    undefined
  );
  useEffect(() => {
    setSearchString(undefined);
  }, [location?.pathname]);

  const {
    data: books,
    isLoading: loading,
    refetch,
  } = useBooks({
    page: activePage,
    search: searchString,
    fav:
      location?.pathname === PATH_NAMES.favorites.base ? "current" : undefined,
    period:
      location?.pathname === PATH_NAMES.finished.base ||
      location?.pathname === PATH_NAMES.progress.base
        ? location?.pathname.substring(1)
        : undefined,
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
        defaultValue={searchString}
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
          <Block className="books-page__empty">
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
