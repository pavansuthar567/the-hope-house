// import { projectDetailsArea } from "@/data/projectsArea";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

// const {
//   thumb,
//   flag,
//   tagline,
//   country,
//   title,
//   pledged,
//   backers,
//   daysLeft,
//   raised,
//   goal,
//   socials,
// } = projectDetailsArea;
const ProjectDetailsArea = ({ project }) => {
  const {
    eventName,
    description,
    location: { venue, state },
    startDate,
    endDate,
    // capacity,
    // participantsRegistered,
    eventType,
    registrationLink,
    previewfeaturedImage,
    status,
  } = project;

  return (
    <section className="project-details-area pt-120 pb-160">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="project-details-thumb">
              <Image
                src={previewfeaturedImage?.[0]?.image?.[0]}
                alt={eventName}
              />
              <div className="icon">
                <i className="fa fa-heart"></i>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="project-details-content">
              <div className="details-btn">
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {eventType}
                </span>
                <div className="flag">
                  {/* <Image src={flag.src} alt="" />
                  <p>{country}</p> */}
                  <p>
                    {venue}, {state}
                  </p>
                </div>
              </div>
              {/* <h3 className="title">{title}</h3> */}
              <h3 className="title">{eventName}</h3>
              <p className="mb-15">{description}</p>
              <div className="project-details-item">
                <div className="item text-center">
                  {/* <h5 className="title">${pledged}</h5>
                  <span>Pledged</span> */}
                  <h5 className="title">
                    {moment(startDate).format("DD MMM YY")}
                  </h5>
                  <span>Start Date</span>
                </div>
                <div className="item text-center">
                  {/* <h5 className="title">{backers}</h5>
                  <span>Backers</span> */}
                  <h5 className="title">
                    {moment(endDate).format("DD MMM YY")}
                  </h5>
                  <span>End Date</span>
                </div>
                <div className="item text-center">
                  <h5 className="title">
                    {moment(startDate).diff(moment(), "days")}
                  </h5>
                  <span>Days Left</span>
                </div>
              </div>
              {/* <div className="projects-range">
                <div className="projects-range-content">
                  <ul>
                    <li>Raised:</li>
                    <li>{raised}%</li>
                  </ul>
                  <div className="range"></div>
                <h5 className="title">  // Added
                  {participantsRegistered}/{capacity} // Added
                </h5> // Added
                <span>Participants</span> // Added
              </div>
              </div> */}
              <div className="projects-goal">
                <span>
                  {/* Goal: <span>{goal} USD</span> */}
                  Status: <span>{status}</span>
                </span>
              </div>
              {status !== "Completed" && (
                <div className="project-btn mt-25">
                  {/* <Link className="main-btn" href="#">
                Back this project */}
                  <Link className="main-btn" href={registrationLink}>
                    Register for this event
                  </Link>
                </div>
              )}
              {/* <div className="project-share d-flex align-items-center">
                <span>Share this Project</span>
                <ul>
                  {socials.map(({ id, icon, href }) => (
                    <li key={id}>
                      <Link href={href}>
                        <i className={icon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsArea;
