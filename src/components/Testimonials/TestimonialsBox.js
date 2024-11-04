import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const TestimonialsBox = ({ testimonial = {} }) => {
  const { name, message, image } = testimonial;

  return (
    <div className="testimonials-box mt-30">
      <Row>
        <Col lg={7}>
          <div className="testimonials-content">
            <h4 className="title">{name}</h4>
            <p>{message}</p>
          </div>
        </Col>
        <Col lg={5}>
          <div className="testimonials-thumb text-right">
            <Image src={image} alt="" width={360} height={412} />
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
