import { whyChoose } from "@/data/whyChoose";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const { title, tagline, title2, items } = whyChoose;

const Item = ({ item = {} }) => {
  const { title, text } = item;
  return (
    <div className="item mt-50">
      <i className="flaticon-checkmark"></i>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

const Thumb = ({ thumb }) => {
  return (
    <div className="thumb">
      <Image src={thumb} alt="" />
      {/* <Image src={thumb.src} alt="" /> */}
    </div>
  );
};

const WhyChoose = () => {
  const { selectedHome = {} } = useSelector(({ home }) => home);

  const { whyChooseThumb1, whyChooseThumb2 } = selectedHome?.pageImages?.home;

  return (
    <section className="why-choose-area">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="why-choose-thumb d-block d-sm-flex">
              <div className="item-1">
                <div className="conent">
                  <h4 className="title">{title}</h4>
                </div>
                <Thumb thumb={whyChooseThumb1} />
              </div>
              <div className="item-2">
                <Thumb thumb={whyChooseThumb2} />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="why-choose-content">
              <span>{tagline}</span>
              <h3 className="title">{title2}</h3>
              {items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
