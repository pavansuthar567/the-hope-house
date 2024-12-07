import { similarProjects } from "@/data/projectsArea";
import React, { useCallback, useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProject from "./SingleProject";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "src/_services/events.service";
import Title from "../Reuseable/Title";

const SimilarProjects = () => {
  const dispatch = useDispatch();
  const { eventList: projects = [] } = useSelector(({ event }) => event);

  const { tagline, title } = similarProjects;

  const loadData = useCallback(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filteredProjects = useMemo(() => {
    return [...projects]
      .filter((event) => event.status !== "Cancelled")
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
      .slice(0, 3);
  }, [projects]);

  return (
    <section className="explore-projects-area explore-projects-page-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title title={title} tagline={tagline} className="text-center" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {filteredProjects?.map((project) => (
            <Col lg={4} md={6} sm={9} key={project._id}>
              <SingleProject project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SimilarProjects;
