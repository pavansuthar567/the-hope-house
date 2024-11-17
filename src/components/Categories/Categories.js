import { categoriesSection } from "@/data/categories";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { bg, tagline, title, text, title2, text2, categories } =
  categoriesSection;

const CategoriesBoxItem = ({ categories = [] }) => {
  return (
    <div className="categories-box-item">
      {categories.map(({ id, icon, title }) => (
        <div key={id} className="item">
          <Link href="#">
            <i className={icon}></i>
            <br />
            <span className="px-1">{title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

const Categories = () => {
  return (
    <section
      className="categories-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="categories-content">
              <h3 className="title">{title}</h3>
              <p className="mb-4 mb-5">{text}</p>
              <h3 className="title">{title2}</h3>
              <p className="mb-4">{text2}</p>
              {/* <div className="item d-flex align-items-center">
                <div className="thumb">
                  <Image src={categoriesUser.src} alt="" />
                </div>
                <Image src={signIn.src} alt="singin" />
              </div> */}
            </div>
          </Col>
          <Col lg={7}>
            <div className="categories-box">
              <span className="tagline mb-3">{tagline}</span>
              <CategoriesBoxItem categories={categories.slice(0, 3)} />
              <CategoriesBoxItem categories={categories.slice(3)} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
