import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "src/_services/blog.service";
import { useFormik } from "formik";
import NewsItem from "./NewsItem";
import CustomPagination from "../Pagination/Pagination";
import Title from "../Reuseable/Title";

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

  const loadData = useCallback(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Extract unique categories
  const uniqueCategories = useMemo(() => {
    return [
      "All Categories",
      ...new Set(blogs?.map((blog) => blog.category).filter(Boolean)),
    ];
  }, [blogs]);

  const formik = useFormik({
    initialValues: {
      selectedCategory: "All Categories",
    },
    onSubmit: (values) => {
      setCurrentPage(1); // Reset to the first page on filter change
    },
  });

  // Filtered blogs based on category
  const filteredBlogs = useMemo(() => {
    return blogs?.filter(
      (blog) =>
        !formik.values.selectedCategory ||
        formik.values.selectedCategory === "All Categories" ||
        blog.category === formik.values.selectedCategory
    );
  }, [blogs, formik.values.selectedCategory]);

  // Paginated blogs
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return isPagination
      ? filteredBlogs?.slice(startIndex, startIndex + itemsPerPage)
      : filteredBlogs;
  }, [currentPage, isPagination, filteredBlogs]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

        {/* Filter Section */}
        {isPagination && blogs?.length > 0 && (
          <Row className="justify-content-center pb-20">
            <Col lg={12}>
              <form onSubmit={formik.handleSubmit} id="news-filter-form">
                <div className="blog-filter-item">
                  <Row>
                    <Col lg={4} md={4} sm={12}>
                      <div className="input-box mt-20">
                        <select
                          name="selectedCategory"
                          value={formik.values.selectedCategory}
                          onChange={formik.handleChange}
                        >
                          {uniqueCategories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Col>
                  </Row>
                </div>
              </form>
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
                isPagination={isPagination}
              />
            ))}
        </Row>

        {/* Pagination */}
        {isPagination && filteredBlogs?.length > itemsPerPage && (
          <CustomPagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredBlogs.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </section>
  );
};

export default NewsArea;
