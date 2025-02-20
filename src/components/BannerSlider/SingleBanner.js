"use client";

import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSwiperSlide } from "swiper/react";

const SingleBanner = ({
  singleSlide = {},
  isBannerTwo = false,
  isBannerThree = false,
}) => {
  const { isActive } = useSwiperSlide();

  const { bg, text, title, banner, banner1, banner2 } = singleSlide;

  return (
    <div
      className={`banner-area bg_cover d-flex ${
        isBannerThree ? "banner-3-area align-items-end" : "align-items-center"
      }`}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* YouTube Video Background */}
      <div
        className="video-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <iframe
          src={bg}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        ></iframe>
      </div>

      <Container>
        <Row
          className={
            isBannerTwo || isBannerThree
              ? "justify-content-start"
              : "justify-content-center"
          }
        >
          <Col lg={8}>
            <div
              className={`banner-content${
                !isBannerTwo && !isBannerThree ? " text-center" : ""
              }`}
            >
              {!isBannerTwo && !isBannerThree && (
                <div
                  className={`box${isActive ? " animated fadeInDown" : ""}`}
                ></div>
              )}
              {!isBannerTwo && !isBannerThree && <br />}
              {!isBannerTwo && !isBannerThree && (
                <span className={isActive ? " animated fadeInLeft" : ""}>
                  {text}
                </span>
              )}
              <h3
                className={`title${isActive ? " animated fadeInRightBig" : ""}`}
              >
                {title}
              </h3>
              <Link
                className={`main-btn${isActive ? " animated zoomIn" : ""}`}
                href="/donate"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.querySelector("i").style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#674df0";
                  e.currentTarget.querySelector("i").style.color = "#674df0";
                }}
              >
                <i
                  className="fa fa-heart"
                  style={{
                    color: "#674df0",
                    marginRight: "5px",
                  }}
                ></i>{" "}
                Donate Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      {!isBannerTwo && !isBannerThree && (
        <div
          className={`banner-line${isActive ? " animated fadeInRightBig" : ""}`}
        >
          <Image src={banner.src} alt="" />
        </div>
      )}

      {isBannerTwo && (
        <>
          <div className="banner-color-shadow">
            <Image src={banner.src} alt="" />
          </div>
          <div className="banner-line">
            <Image src={banner1.src} alt="" />
          </div>
          <div className="banner-line-2">
            <Image src={banner2.src} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBanner;
