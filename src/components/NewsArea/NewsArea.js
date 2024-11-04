import React, { useCallback, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "src/_services/blog.service";

const NewsArea = ({ className = "", newsTwo = false, newsPage = false }) => {
  const dispatch = useDispatch();

  const { blogList: blogs } = useSelector(({ blog }) => blog);

  const loadData = useCallback(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

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
          {blogs
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
      </Container>
    </section>
  );
};

export default NewsArea;
