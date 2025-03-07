import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import NavItem from "./NavItem";
import Link from "next/link";

const { navItems, email, socials } = headerData;

const OffCanvasMenu = () => {
  const { menuStatus, toggleMenu } = useRootContext();
  const [activeId, setActiveId] = useState(0);

  const handleActive = (id) => {
    setActiveId((preId) => (preId === id ? 0 : id));
  };

  return (
    <>
      <div
        onClick={toggleMenu}
        className={`off_canvars_overlay${menuStatus ? " active" : ""}`}
      />
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <Row>
            <Col>
              <div
                className={`offcanvas_menu_wrapper${
                  menuStatus ? " active" : ""
                }`}
              >
                <div className="canvas_close">
                  <Link onClick={toggleMenu} href="#">
                    <i className="fa fa-times"></i>
                  </Link>
                </div>
                <div className="offcanvas-social">
                  <ul className="text-center">
                    {socials.map(({ id, icon, href = "" }) => (
                      <li key={id}>
                        <Link href={href} target="_blank">
                          <i className={icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu">
                    {navItems.map((navItem) => (
                      <NavItem
                        activeId={activeId}
                        handleActive={handleActive}
                        key={navItem.id}
                        navItem={navItem}
                        mobile
                      />
                    ))}
                  </ul>
                </div>
                <div className="offcanvas_footer">
                  <span>
                    <Link href={`mailto:${email}`}>
                      <i className="fa fa-envelope-o"></i> {email}
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
