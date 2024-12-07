import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "src/_services/blog.service";
import CustomPagination from "../Pagination/Pagination";

const itemsPerPage = 6;

const NewsArea = ({
  className = "",
  newsTwo = false,
  newsPage = false,
  isPagination = false,
}) => {
  const dispatch = useDispatch();

  const { blogList: blogs } = useSelector(({ blog }) => blog);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs?.length / itemsPerPage);

  const loadData = useCallback(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return isPagination
      ? blogs?.slice(startIndex, startIndex + itemsPerPage)
      : blogs?.slice(0, blogs?.length);
  }, [currentPage, isPagination, blogs, blogs]);

  return (
    <section className={`news-area ${className}`}>
      <Container>
        {!newsPage && (
          <Row className="justify-content-center">
            <Col lg={6}>
              <Title
                title={"News & Articles"}
                tagline={"All From the Blog"}
                className="text-center"
              />
            </Col>
          </Row>
        )}
        <Row className={newsTwo ? "" : "no-gutters"}>
          {currentItems
            ?.filter((blog) => blog?.publishedDate)
            ?.slice(0, newsPage ? undefined : newsTwo ? 3 : 4)
            .map((news, index) => (
              <NewsItem
                key={`news_${news._id}`}
                news={news}
                index={index}
                newsTwo={newsTwo}
              />
            ))}
        </Row>
        {isPagination && blogs?.length > itemsPerPage && (
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </section>
  );
};

export default NewsArea;
