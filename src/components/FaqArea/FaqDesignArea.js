import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faqs from "./Faqs";
import Link from "next/link";
import { getFaqs } from "src/_services/faqs.service";
import { useDispatch, useSelector } from "react-redux";

const NavItem = ({ navItem = {}, current, setCurrent }) => {
  const { href = "", icon, name } = navItem;

  return (
    <li className="nav-item" role="presentation">
      <Link
        onClick={(e) => {
          e.preventDefault();
          setCurrent(href);
        }}
        className={`nav-link cursor-pointer${
          href === current ? " active" : ""
        }`}
        role="tab"
        href="#"
      >
        <i className={icon}></i> {name}
      </Link>
    </li>
  );
};

const SingleTab = ({ tab = {}, current }) => {
  const { id, faqsData } = tab;
  const active = current === id;

  return (
    <div
      className={`tab-pane animated${active ? " fadeIn show active" : ""}`}
      id={id}
    >
      <Row>
        {faqsData?.map((faqs, i) => (
          <Col key={i} lg={6}>
            <Faqs faqs={faqs} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const convertFaqsToDesignArea = (faqs) => {
  const categories = [...new Set(faqs.map((faq) => faq?.category))];
  const navItems = categories?.map((category, index) => ({
    id: index + 1,
    href: `pills-${index + 1}`,
    icon: "flaticon-placeholder", // Customize icons per category as needed
    name: category,
  }));

  const tabPane = categories.map((category, index) => {
    const categoryFaqs = faqs.filter((faq) => faq.category === category);
    const middleIndex = Math.ceil(categoryFaqs.length / 2); // Calculate the middle index to split into two groups

    return {
      id: `pills-${index + 1}`,
      faqsData: [
        categoryFaqs.slice(0, middleIndex), // First half
        categoryFaqs.slice(middleIndex), // Second half
      ],
    };
  });

  return { navItems, tabPane };
};

const FaqDesignArea = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("pills-1");
  const { faqsFilteredList: faqs } = useSelector(({ faqs }) => faqs);

  const loadData = useCallback(() => {
    dispatch(getFaqs());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const faqData = useMemo(() => convertFaqsToDesignArea(faqs), [faqs]);

  return (
    <section className="faq-design-area pb-120">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-tab-btn">
              <ul className="nav nav-pills justify-content-between">
                {faqData?.navItems?.map((navItem) => (
                  <NavItem
                    navItem={navItem}
                    key={navItem.id}
                    current={current}
                    setCurrent={setCurrent}
                  />
                ))}
              </ul>
            </div>
            <div className="tab-content mt-55" id="pills-tabContent">
              {faqData?.tabPane?.map((tab) => (
                <SingleTab key={tab.id} tab={tab} current={current} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqDesignArea;
