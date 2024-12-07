// import bg from "@/images/page-title-bg.jpg";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageTitle = ({ title = "", page = "", parent = "" }) => {
  const bgs = {
    // FAQs: "https://www.andovercorp.com/content/uploads/FAQ.png",
    FAQs: "https://media.licdn.com/dms/image/C4E12AQEOCRBXE5yUhA/article-cover_image-shrink_720_1280/0/1619501870929?e=2147483647&v=beta&t=By9px4peK-i3FL4ityNfFtN8v70KyJ4u1ruhD9TokR0",
    Contact:
      "https://krowd-nextjs.vercel.app/_next/static/media/page-title-bg.e4241f75.jpg",
    Volunteer:
      "https://c0.wallpaperflare.com/preview/959/174/509/volunteer-activity-arms-raised-care.jpg",
    "Team Members":
      "https://img.freepik.com/premium-photo/people-raising-hands-air-party-background_968882-2091.jpg",
    Gallery:
      "https://images.hdqwalls.com/wallpapers/looking-far-away-4k-lb.jpg",
    About:
      "https://png.pngtree.com/background/20210710/original/pngtree-positive-energy-youth-poster-background-material-picture-image_1056185.jpg",
    Events:
      "https://png.pngtree.com/background/20210711/original/pngtree-opening-event-poster-background-picture-image_1097803.jpg",
    News: "https://wallpapers.com/images/hd/composer-workspace-blogging-backdrop-4ferx6eq7jp9z9im.jpg",
    Event:
      "https://res.cloudinary.com/dlqdosage/image/upload/v1731915408/media/vdcoaqhydjlkzhdmmltp.jpg",
  };

  return (
    <section
      className="page-title-area bg_cover"
      style={{ backgroundImage: `url(${bgs[title]})` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-title-content">
              <h3 className="title">{title}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  {parent && (
                    <li className="breadcrumb-item active" aria-current="page">
                      {parent}
                    </li>
                  )}
                  <li className="breadcrumb-item active" aria-current="page">
                    {page || title}
                  </li>
                </ol>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
