import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const TestimonialsBox = ({ testimonial = {} }) => {
  const { name, message, image } = testimonial;

  return (
    <div className="testimonials-box mt-30 !pb-5">
      <Row>
        <Col lg={8}>
          <div className="testimonials-content">
            <h4 className="title">{name}</h4>
            <p>{message}</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="testimonials-thumb text-right">
            <Image
              src={image}
              alt=""
              width={280}
              height={320}
              style={{
                width: "280px",
                height: "320px",
                objectFit: "cover",
              }}
            />
            <div className="quote">
              <i className="flaticon-left-quotes-sign"></i>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TestimonialsBox;
