import footerData from "@/data/siteFooter";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FooterList from "./FooterList";
import Link from "next/link";

const { bg, logo, text, author, year, links, socials, text2, shape } =
  footerData;

const SiteFooter = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <footer
      className="footer-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col lg={4} md={6} sm={8}>
            <div className="footer-about mt-30">
              <Link href="/" style={{ backgroundColor: "#674df0" }}>
                <Image
                  src={logo.src}
                  alt="logo"
                  style={{ maxWidth: "250px", height: "50px" }}
                />
              </Link>
              <p>{text}</p>
              <ul>
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <Link href={href} target="_blank">
                      <i className={icon}></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <FooterList title="Informations" list={links.slice(0, 5)} />
          <FooterList title="Quick Links" list={links.slice(5)} />
          <Col lg={4} md={6} sm={8}>
            <div className="footer-newsletter mt-30">
              <div className="footer-title">
                <h4 className="title">Newsletter</h4>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button>
                    <i className="fa fa-envelope"></i>
                  </button>
                </div>
              </form>
              <p>{text2}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="footer-copyright text-center">
              <p>
                © Copyright {year} by {author}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-shape">
        <Image src={shape.src} alt="" />
      </div>
    </footer>
  );
};

export default SiteFooter;
