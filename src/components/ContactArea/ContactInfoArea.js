import { contactInfoArea } from "@/data/contactArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import footerData from "@/data/siteFooter";
import Link from "next/link";

const { socials } = footerData;

const ContactInfoArea = () => {
  return (
    <section className="contact-info-area">
      <Container fluid className="p-0">
        <Row className="no-gutters justify-content-center">
          {contactInfoArea.map(
            ({ id, title, icon, text, lists = [] }, index) => (
              <Col key={id} lg={4} md={9}>
                <div
                  className={`contact-info-item${
                    id !== 1 ? ` item-${id}` : ""
                  }${index === 2 ? ` has-social-links` : ""}`}
                >
                  <div className="icon">
                    <i className={icon}></i>
                  </div>
                  <h4 className="title">{title}</h4>
                  {text && <TextSplit text={text} as="p" />}
                  {lists.length > 0 && (
                    <ul>
                      {lists.map((list, i) => (
                        <li key={i}>{list === "" ? "\u00A0" : list}</li>
                      ))}
                    </ul>
                  )}
                  {index === 2 && (
                    // <div className="d-flex flex-row">
                    <ul className="social-links">
                      {socials.map(({ id, icon, href }) => (
                        <li key={id} className="social-link">
                          <Link href={href} target="_blank">
                            <i className={icon}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    // </div>
                  )}
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ContactInfoArea;
