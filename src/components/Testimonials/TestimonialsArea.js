import React, { useCallback, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Reuseable/Title";
import TestimonialsBox from "./TestimonialsBox";
import { getTestimonials } from "src/_services/testimonial.service";
import { useDispatch, useSelector } from "react-redux";

SwiperCore.use([EffectFade, Navigation, Autoplay]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const TestimonialsArea = () => {
  const dispatch = useDispatch();

  const { testimonialList: testimonials } = useSelector(
    ({ testimonial }) => testimonial
  );

  const loadData = useCallback(() => {
    dispatch(getTestimonials());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section className="testimonials-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Title
              title={"Our Testimonials"}
              tagline={"What They Say"}
              className="text-center"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="testimonials-slide">
              <Swiper {...options}>
                <div className="swiper-wrapper">
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={`testimonial_${testimonial._id}`}>
                      <TestimonialsBox testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
                </div>
                <div>
                  <span
                    className="prev slick-arrow"
                    id="main-slider__swiper-button-prev"
                  >
                    <i className="flaticon-back"></i>
                  </span>
                  <div
                    className="next slick-arrow"
                    id="main-slider__swiper-button-next"
                  >
                    <i className="flaticon-next"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsArea;
