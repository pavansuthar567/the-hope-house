import { faqArea } from "@/data/faqArea";
import React, { useCallback, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faqs from "./Faqs";
import Link from "next/link";
import { getFaqs } from "src/_services/faqs.service";
import { useDispatch, useSelector } from "react-redux";

const { bg, tagline, title, text, categories, faqs } = faqArea;

const Category = ({ category = {} }) => {
  const { href = "", icon, text } = category;
  return (
    <div className="item">
      <Link href={href}>
        <i className={icon}></i>
        <br />
        <span>{text}</span>
      </Link>
    </div>
  );
};

const FaqArea = () => {
  const dispatch = useDispatch();
  const { faqsFilteredList: faqs } = useSelector(({ faqs }) => faqs);

  const loadData = useCallback(() => {
    dispatch(getFaqs());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section
      className="faq-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="faq-content">
              <span>{"Frequently Asked Questions"}</span>
              <h3 className="title">{"How Can We Help?"}</h3>
              <p>{text}</p>
              <div className="categories-box-item">
                {categories.map((category) => (
                  <Category key={category.id} category={category} />
                ))}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            {faqs?.length > 0 && <Faqs faqs={faqs?.slice(0, 4)} />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqArea;
