import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import payBarcode from "@/images/hope-house-pay-barcode.webp";
import phonePayIcon from "@/svg/phone-pay-icon.svg";
import googlePayIcon from "@/svg/google-pay-icon.svg";
import paytmIcon from "@/svg/paytm-icon.svg";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/Reuseable/PageTitle";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/Reuseable/Title";
import Link from "next/link";
import footerData from "@/data/siteFooter";

const { socials } = footerData;

const Donate = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Donate" />
      <Container fluid className="py-5">
        <div>
          <div className="text-center text-white p-4 rounded-top">
            <Title
              tagline={"Kuch accha ho jaye"}
              title={"Money Transfer Details"}
              className="text-center"
            />
          </div>
          <div className="p-4">
            <Row className="tablet-payment">
              <Col
                md={6}
                className="pe-4 d-flex flex-column align-items-center justify-content-center p-4 border-end no-border-mobile"
              >
                <h6
                  className="mb-4 text-uppercase font-weight-bold text-center"
                  style={{
                    color: "#674df0",
                    fontFamily: "'Arial', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                >
                  Bank Account Details
                </h6>
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="d-flex justify-content-between w-100"
                    style={{ maxWidth: "400px", minWidth: "250px" }}
                  >
                    <p
                      className="text-muted small"
                      style={{
                        fontSize: "1rem",
                        marginRight: "10px",
                      }}
                    >
                      Name:
                    </p>
                    <p
                      className="text-muted small"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      The Hope House
                    </p>
                  </div>
                  <div
                    className="d-flex justify-content-between w-100"
                    style={{ maxWidth: "400px", minWidth: "250px" }}
                  >
                    <p
                      className="text-muted small"
                      style={{
                        fontSize: "1rem",
                        marginRight: "10px",
                      }}
                    >
                      Account No.:
                    </p>
                    <p
                      className="text-muted small"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      50200059846421
                    </p>
                  </div>
                  <div
                    className="d-flex justify-content-between w-100"
                    style={{ maxWidth: "400px", minWidth: "250px" }}
                  >
                    <p
                      className="text-muted small"
                      style={{
                        fontSize: "1rem",
                        marginRight: "10px",
                      }}
                    >
                      IFSC Code:
                    </p>
                    <p
                      className="text-muted small"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      HDFC0000986
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6} className="text-center">
                <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row">
                  <div className="d-flex flex-column justify-content-center text-center me-lg-5 mb-3 mb-lg-0">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      <Image
                        src={googlePayIcon?.src}
                        alt="Google Pay"
                        width={50}
                        height={50}
                      />
                      <div style={{ margin: "0 10px" }}></div>
                      <Image
                        src={phonePayIcon?.src}
                        alt="Phone Pay"
                        width={45}
                        height={45}
                      />
                      <div style={{ margin: "0 10px" }}></div>
                      <Image
                        src={paytmIcon?.src}
                        alt="paytm"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div style={{ fontSize: "20px" }}>
                      <strong>8005930712</strong>
                    </div>
                  </div>
                  <Image
                    src={payBarcode?.src}
                    alt="QR Code"
                    className="img-fluid mt-3 mt-md-0"
                    style={{
                      maxWidth: "170px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="text-center text-muted p-3">
            <p
              className="text-muted small text-center mt-5"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              The Contribution is exempted from Income Tax u/s 80G (2)(b) of
              I.T. Act 1961 vide CBDT Notification 24/2020/F. No
              176/8/2017/IT-1.
            </p>
            <div className="registration-details mt-4 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column align-items-center">
                <div
                  className="d-flex justify-content-between w-100"
                  style={{ maxWidth: "400px", minWidth: "300px" }}
                >
                  <p
                    className="text-muted small"
                    style={{
                      fontSize: "1rem",
                      marginRight: "10px",
                    }}
                  >
                    Reg no.:
                  </p>
                  <p
                    className="text-muted small"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    20211010540021622
                  </p>
                </div>
                <div
                  className="d-flex justify-content-between w-100"
                  style={{ maxWidth: "400px", minWidth: "300px" }}
                >
                  <p
                    className="text-muted small"
                    style={{
                      fontSize: "1rem",
                      marginRight: "10px",
                    }}
                  >
                    Unique Reg. no.:
                  </p>
                  <p
                    className="text-muted small"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    AAETT0333KF2021
                  </p>
                </div>
                <div
                  className="d-flex justify-content-between w-100"
                  style={{ maxWidth: "400px", minWidth: "300px" }}
                >
                  <p
                    className="text-muted small"
                    style={{
                      fontSize: "1rem",
                      marginRight: "10px",
                    }}
                  >
                    PAN:
                  </p>
                  <p
                    className="text-muted small"
                    style={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    AAETT0333K
                  </p>
                </div>
              </div>
            </div>
            <Link
              className="main-btn mt-5"
              href="/contact"
              style={{
                color: "#fff",
                backgroundColor: "#674df0",
              }}
            >
              Contact Us
            </Link>
            <div className="social-media-section mt-5 text-center">
              <p
                className="mb-4"
                style={{ fontSize: "1.2rem", fontWeight: "600" }}
              >
                Follow us on social media:
              </p>
              <div className="d-flex justify-content-center">
                {socials.map(({ id, alt, svgIconSrc, href }) => (
                  <Link key={id} href={href} target="_blank">
                    <Image
                      src={svgIconSrc}
                      alt={alt}
                      width={50}
                      height={50}
                      className="mx-2"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Donate;
