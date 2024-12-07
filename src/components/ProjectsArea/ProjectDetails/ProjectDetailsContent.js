import { projectDetailsTabBtns } from "@/data/projectsArea";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectDetailsSidebar from "./ProjectDetailsSidebar";
import Link from "next/link";
// import ProjectDetailsComments from "./ProjectDetailsComments";
// import ProjectDetailsFaq from "./ProjectDetailsFaq";
// import ProjectDetailsStory from "./ProjectDetailsStory";
// import ProjectDetailsUpdates from "./ProjectDetailsUpdates";

const ProjectDetailsContent = ({ project }) => {
  const { content = "" } = project;
  const [current, setCurrent] = useState("pills-home");

  // const getClassName = (id = "") => {
  //   const active = current === id;
  //   return `tab-pane animated${active ? " fadeIn show active" : ""}`;
  // };

  return (
    <section className="project-details-content-area pb-110">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="tab-btns">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {projectDetailsTabBtns.map(({ id, name }) => (
                  <li key={id} className="nav-item" role="presentation">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrent(id);
                      }}
                      className={`nav-link cursor-pointer ${
                        id !== current ? " active" : ""
                      }`}
                      role="tab"
                      href="#"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="event-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <style jsx global>{`
                .event-content * {
                  all: unset;
                  display: revert;
                }
                .event-content img {
                  max-width: 100%;
                  height: auto;
                }
                .event-content table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 20px 0;
                  font-size: 16px;
                  text-align: left;
                }
                .event-content table th,
                .event-content table td {
                  border: 1px solid #ddd;
                  padding: 12px 15px;
                }
                .event-content table th {
                  background-color: #f4f4f4;
                  font-weight: bold;
                }
                .event-content table tr:nth-child(even) {
                  background-color: #f9f9f9;
                }
                .event-content table tr:hover {
                  background-color: #f1f1f1;
                }
                .event-content blockquote {
                  border-left: 4px solid #ddd;
                  padding-left: 1em;
                  margin: 1em 0;
                }
                .event-content strong {
                  font-weight: bold;
                }
                .event-content em {
                  font-style: italic;
                }
                .event-content i {
                  font-style: italic;
                }
                .event-content h1,
                .event-content h2,
                .event-content h3,
                .event-content h4,
                .event-content h5,
                .event-content h6 {
                  margin: 1em 0;
                  font-weight: bold;
                  line-height: 1.2;
                  display: block;
                }
                .event-content h1 {
                  font-size: 2em;
                }
                .event-content h2 {
                  font-size: 1.75em;
                }
                .event-content h3 {
                  font-size: 1.5em;
                }
                .event-content h4 {
                  font-size: 1.25em;
                }
                .event-content h5 {
                  font-size: 1em;
                }
                .event-content h6 {
                  font-size: 0.875em;
                }
                .event-content ul {
                  list-style-type: disc;
                  margin: 1em 0;
                  padding-left: 1.5em;
                }
                .event-content ul li {
                  margin-bottom: 0.5em;
                  font-weight: bold;
                }
                .event-content ul li ul li {
                  font-weight: normal;
                }
                .event-content ol {
                  list-style-type: decimal;
                  margin: 1em 0;
                  padding-left: 1.5em;
                }
                .event-content ol li {
                  margin-bottom: 0.5em;
                }
                .event-content input[type="checkbox"] {
                  margin-right: 0.5em;
                  display: inline-block;
                  vertical-align: middle;
                  appearance: auto;
                }
                .event-content input[type="checkbox"] + label {
                  font-weight: normal;
                  display: inline;
                }
                .event-content a {
                  color: #007bff;
                  text-decoration: underline;
                  cursor: pointer;
                }
                .event-content a:hover {
                  color: #0056b3;
                }
              `}</style>
              {/* <ProjectDetailsStory getClassName={getClassName} /> */}
              {/* <ProjectDetailsFaq getClassName={getClassName} /> */}
              {/* <ProjectDetailsUpdates getClassName={getClassName} /> */}
              {/* <ProjectDetailsComments getClassName={getClassName} /> */}
            </div>
          </Col>
          <Col lg={4} md={7} sm={9}>
            <ProjectDetailsSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsContent;
