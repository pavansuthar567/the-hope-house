import { togetherArea } from "@/data/togetherArea";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const { tagline, title } = togetherArea;

const TogetherArea = ({ className = "" }) => {
  const { selectedHome = {} } = useSelector(({ home }) => home);

  const { togetherBg } = selectedHome?.pageImages?.home;

  return (
    <section
      className={`together-area bg_cover ${className}`}
      style={{ backgroundImage: `url(${togetherBg})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="together-content text-center">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <Link className="main-btn" href="/volunteer">
                Join Us
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TogetherArea;
