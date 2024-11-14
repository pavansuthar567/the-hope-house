"use client";
import { projectsArea } from "@/data/projectsArea";
import React, { useEffect, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Reuseable/Title";
import SingleProject from "./SingleProject";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "src/_services/events.service";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const { tagline, title } = projectsArea;

const ProjectsArea = ({ className = "" }) => {
  const [domLoaded, setDOMLoaded] = useState(false);

  useEffect(() => {
    setDOMLoaded(true);
  }, []);

  const dispatch = useDispatch();
  const { eventList: events = [] } = useSelector(({ event }) => event);

  const loadData = useCallback(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section className={`explore-projects-area ${className}`}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title tagline={tagline} title={title} className="text-center" />
          </Col>
        </Row>
        <div className="explore-project-active">
          {domLoaded && (
            <Swiper {...options}>
              <div className="swiper-wrapper">
                {events?.slice(0, 4)?.map((event) => (
                  <SwiperSlide key={`${event?._id}-${event?.eventName}`}>
                    <SingleProject project={event} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsArea;
