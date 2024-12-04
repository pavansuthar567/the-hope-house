import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleries } from "src/_services/gallery.service";
import PortfolioItem from "./PortfolioItem";
import { Container, Row, Col } from "react-bootstrap";

const GalleryPage = ({ autoScroll = true }) => {
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const { galleryList } = useSelector(({ gallery }) => gallery);

  const loadData = () => {
    dispatch(getGalleries());
  };

  useEffect(() => {
    loadData();
  }, [dispatch]);

  useEffect(() => {
    if (autoScroll) {
      setTimeout(() => {
        window.scrollBy(0, 350); // Scroll down by 200px only once
      }, 2000);
    }
  }, [autoScroll]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryList.length) % galleryList.length
    );
  };

  return (
    <div className="gallery-page-area">
      <Container>
        <Row>
          {galleryList.map((item, index) => (
            <Col key={item?.id} lg={4} md={6} sm={6}>
              <PortfolioItem
                portfolio={item}
                className=" mt-30"
                onImageClick={() => handleImageClick(index)}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {isZoomed && (
        <PortfolioItem.ZoomModal
          portfolio={galleryList[currentIndex]}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={handleCloseZoom}
        />
      )}
    </div>
  );
};

export default GalleryPage;
