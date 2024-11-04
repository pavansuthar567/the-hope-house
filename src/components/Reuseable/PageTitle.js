import bg from "@/images/page-title-bg.jpg";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageTitle = ({ title = "", page = "", parent = "" }) => {
  const bgs = {
    // FAQs: "https://www.andovercorp.com/content/uploads/FAQ.png",
    FAQs: "https://media.licdn.com/dms/image/C4E12AQEOCRBXE5yUhA/article-cover_image-shrink_720_1280/0/1619501870929?e=2147483647&v=beta&t=By9px4peK-i3FL4ityNfFtN8v70KyJ4u1ruhD9TokR0",
  };

  return (
    <section
      className="page-title-area bg_cover"
      style={{ backgroundImage: `url(${bgs[title]})` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-title-content">
              <h3 className="title">{title}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  {parent && (
                    <li className="breadcrumb-item active" aria-current="page">
                      {parent}
                    </li>
                  )}
                  <li className="breadcrumb-item active" aria-current="page">
                    {page || title}
                  </li>
                </ol>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
