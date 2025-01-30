import { aboutIntroduction } from "@/data/aboutArea";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";
import { useSelector } from "react-redux";

const { tagline, title, text, items, count, bottomText } = aboutIntroduction;

const AboutIntroduction = () => {
  const { selectedHome = {} } = useSelector(({ home }) => home);

  const { empowerCommunities } = selectedHome?.pageImages?.aboutUsPage;

  return (
    <section className="about-introduction-area pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="about-introduction-content">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <p>{text}</p>
              {items.map((item, i) => (
                <div className={`item${i ? " mt-35" : ""}`} key={i}>
                  <i className="flaticon-checkmark"></i>
                  <h4 className="title">{item}</h4>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={7}>
            <div className="about-introduction-thumb">
              <Image src={empowerCommunities} alt="" width={570} height={530} />
              <div className="about-introduction-customers">
                <h3 className="title odometer">
                  <VisibilityCountUp count={count} />
                </h3>
                <br />
                <span>{bottomText}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutIntroduction;
