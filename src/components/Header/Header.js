import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainHeaderItem from "./MainHeaderItem";
import Social from "./Social";
import Link from "next/link";

const { logo, navItems, phone, icon, email, address, socials } = headerData;

const Header = ({ className = "" }) => {
  const { scrollTop } = useScroll(160);

  return (
    <header className={`header-area ${className}`}>
      {/* <Container>
        <Row>
          <Col lg={12}>
            <div className="header-top d-flex justify-content-between align-items-center">
              <div className="header-info">
                <ul>
                  <li>
                    <Link href={`mailto:${email}`}>
                      <i className="flaticon-email"></i> {email}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="flaticon-placeholder"></i> {address}
                    </Link>
                  </li>
                </ul>
              </div>
              <Social socials={socials} />
            </div>
          </Col>
        </Row>
      </Container> */}
      <div className={`main-header${scrollTop ? " sticky" : ""}`}>
        <Container>
          <MainHeaderItem
            logo={logo}
            navItems={navItems}
            icon={icon}
            phone={phone}
          />
        </Container>
      </div>
    </header>
  );
};

export default Header;
