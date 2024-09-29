import { projectArea } from "@/data/projectsArea";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SingleProject = ({ project = {} }) => {
  const {
    bg,
    title,
    text,
    linkText,
    btnClassName = "",
    className = "",
  } = project;

  return (
    <Col lg={6}>
      <div
        className={`project-explore bg_cover text-center${className}`}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <h3 className="title">{title}</h3>
        <p>{text}</p>
        <Link className={`main-btn${btnClassName}`} href="#">
          {linkText}
        </Link>
      </div>
    </Col>
  );
};

const ProjectArea = () => {
  return (
    <section className="project-area">
      <Container>
        <Row className="no-gutters">
          {projectArea.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectArea;
