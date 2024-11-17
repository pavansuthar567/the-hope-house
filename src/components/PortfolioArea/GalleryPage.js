import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleries } from "src/_services/gallery.service";
import PortfolioItem from "./PortfolioItem";
import { Container, Row, Col } from "react-bootstrap";

const GalleryPage = () => {
  const dispatch = useDispatch();

  const { galleryList } = useSelector(({ gallery }) => gallery);

  const loadData = () => {
    dispatch(getGalleries());
  };

  useEffect(() => {
    loadData();
  }, [dispatch]);

  return (
    <div className="gallery-page-area">
      <Container>
        <Row>
          {galleryList.map((item) => (
            <Col key={item?.id} lg={4} md={6} sm={6}>
              <PortfolioItem portfolio={item} className="mt-30" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryPage;
