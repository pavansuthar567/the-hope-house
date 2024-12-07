import { projectsArea } from "@/data/projectsArea";
import React, { useCallback, useEffect, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProject from "./SingleProject";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "src/_services/events.service";

const { projects } = projectsArea;

const ExploreArea = () => {
  const dispatch = useDispatch();
  const { eventList: events = [] } = useSelector(({ event }) => event);

  const loadData = useCallback(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => event.status !== "Cancelled");
  }, [events]);

  return (
    <section className="explore-area pt-90 pb-120">
      <Container>
        <Row className="justify-content-center">
          {filteredEvents?.map((event) => (
            <Col lg={4} md={6} sm={7} key={`${event?._id}-${event?.eventName}`}>
              <SingleProject project={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExploreArea;
