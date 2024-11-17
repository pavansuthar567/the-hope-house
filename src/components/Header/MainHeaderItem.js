import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import HeaderInfo from "./HeaderInfo";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";

const MainHeaderItem = ({
  logo,
  navItems = [],
  icon,
  phone = "",
  socials,
  searchColor,
}) => {
  return (
    <Row>
      <Col lg={12}>
        <div className="main-header-item">
          <div className="main-header-menus d-flex justify-content-between align-items-center">
            <div className="header-logo" style={{ backgroundColor: '#674df0' }}>
              <Link href="/">
                <Image src={logo.src} alt="logo" style={{ maxWidth: '250px', height: '50px' }} />
              </Link>
            </div>
            <HeaderMenu navItems={navItems} />
            <HeaderInfo
              icon={icon}
              phone={phone}
              socials={socials}
              searchColor={searchColor}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MainHeaderItem;
