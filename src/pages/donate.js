import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import donationImage from "@/images/donation-image.jpg";
import payBarcode from "@/images/hope-house-pay-barcode.webp";
import phonePayIcon from "@/svg/phone-pay-icon.svg";
import googlePayIcon from "@/svg/google-pay-icon.svg";
import paytmIcon from "@/svg/paytm-icon.svg";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/Reuseable/PageTitle";
import Layout from "@/components/Layout/Layout";
import Title from "@/components/Reuseable/Title";

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
            <Row>
              <Col
                md={6}
                className="border-end pe-4 d-flex flex-column align-items-center justify-content-center p-4"
                // className="pe-4 d-flex flex-column align-items-center justify-content-center p-4"
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
                <div className="text-center">
                  <p className="mb-1">
                    <span className="font-weight-bold">Name:</span>{" "}
                    <span className="text-muted" style={{ fontWeight: "bold" }}>
                      The Hope House
                    </span>
                  </p>
                  <p className="mb-1">
                    <span className="font-weight-bold">Account No.:</span>{" "}
                    <span className="text-muted" style={{ fontWeight: "bold" }}>
                      50200059846421
                    </span>
                  </p>
                  <p className="mb-1">
                    <span className="font-weight-bold">IFSC Code:</span>{" "}
                    <span className="text-muted" style={{ fontWeight: "bold" }}>
                      HDFC0000986
                    </span>
                  </p>
                </div>
              </Col>
              <Col md={6} className="text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column justify-content-center text-center me-5">
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
                    className="img-fluid"
                    style={{
                      maxWidth: "170px",
                      borderRadius: "8px",
                      //   marginLeft: "60px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="text-center text-muted p-3">
            <p
              className="text-muted small text-center mt-4"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Contributions are exempted under Income Tax u/s 80G (2)(b) of I.T.
              Act 1961.
            </p>
            <Button
              href="mailto:thehopehousetrust@gmail.com"
              className="w-100 btn-primary mt-3"
              style={{
                backgroundColor: "#674df0",
                border: "none",
                padding: "12px",
              }}
            >
              Contact Us
            </Button>
            <p
              className="mt-4"
              style={{ fontSize: "1.1rem", fontWeight: "500" }}
            >
              Follow us on social media:
            </p>
            <a
              href="https://instagram.com/The_Hope_House"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <strong>@The_Hope_House</strong>
            </a>{" "}
            | Call:{" "}
            <a href="tel:8005930712" className="text-decoration-none">
              <strong>8005930712</strong>
            </a>
          </div>
        </div>
      </Container>
      {/* <Container className="donation-page pt-120 pb-120">
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-left">
            <Image
              src={donationImage?.src}
              alt="Donation Details"
              fluid
              className="mb-4 rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
          <Col lg={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="mb-3">
                  Important Announcement - The Hope House NGO
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  New Money Transfer Details
                </Card.Subtitle>
                <Card.Text className="lead">
                  Effective immediately - Mobile Number for all social media
                  handles and money transfer: <strong>8005930712</strong>
                </Card.Text>
                <Card.Title className="mt-4">Note for Contributors:</Card.Title>
                <ul className="donation-notes list-unstyled">
                  <li>Use these updated details for all donations.</li>
                  <li>
                    Donations to The Hope House NGO are exempt under Income Tax
                    Act.
                  </li>
                  <li>Please share a screenshot of payment with your PAN.</li>
                </ul>
                <Card.Text className="mt-4">
                  Let's continue making the difference!
                </Card.Text>
                <Card.Text className="font-weight-bold">
                  <strong>Kuch Accha Ho Jaye…✨</strong>
                </Card.Text>
                <Button variant="primary" className="mt-3" href="/donate">
                  Donate Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </Layout>
  );
};

export default Donate;

// const DonationPage = () => {
//   return (
//     <Layout>
//       <Header />
//       <PageTitle title="Donate" />
//       <Container className="donation-page pt-120 pb-120">
//         <Row className="align-items-center">
//           <Col lg={6} className="text-center text-lg-left">
//             <Image
//               src={donationImage?.src}
//               alt="Donation Details"
//               fluid
//               className="mb-4 rounded shadow"
//               style={{ maxHeight: "400px", objectFit: "cover" }}
//             />
//           </Col>
//           <Col lg={6}>
//             <Card className="shadow-sm mb-4">
//               <Card.Body>
//                 <Card.Title className="mb-3">
//                   Important Announcement - The Hope House NGO
//                 </Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   New Money Transfer Details
//                 </Card.Subtitle>
//                 <Card.Text className="lead">
//                   Effective immediately - Mobile Number for all social media
//                   handles and money transfer: <strong>8005930712</strong>
//                 </Card.Text>
//                 <Card.Title className="mt-4">Note for Contributors:</Card.Title>
//                 <ul className="donation-notes list-unstyled">
//                   <li>Use these updated details for all donations.</li>
//                   <li>
//                     Donations to The Hope House NGO are exempt under Income Tax
//                     Act.
//                   </li>
//                   <li>Please share a screenshot of payment with your PAN.</li>
//                 </ul>
//                 <Card.Text className="mt-4">
//                   Let's continue making the difference!
//                 </Card.Text>
//                 <Card.Text className="font-weight-bold">
//                   <strong>Kuch Accha Ho Jaye…✨</strong>
//                 </Card.Text>
//                 <Button variant="primary" className="mt-3" href="/donate">
//                   Donate Now
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </Layout>
//   );
// };

// export default DonationPage;
