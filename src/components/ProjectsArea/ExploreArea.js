// import { projectsArea } from "@/data/projectsArea";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProject from "./SingleProject";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "src/_services/events.service";
import CustomPagination from "../Pagination/Pagination";

// const { projects } = projectsArea;
const itemsPerPage = 6;

const ExploreArea = ({ isPagination = false }) => {
  const dispatch = useDispatch();
  const { eventList: events = [] } = useSelector(({ event }) => event);

  const [currentPage, setCurrentPage] = useState(1);

  const loadData = useCallback(() => {
    dispatch(getEvents());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => event.status !== "Cancelled");
  }, [events]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredEvents?.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredEvents]);

  return (
    <section className="explore-area pt-90 pb-120">
      <Container>
        <Row className="justify-content-center">
          {currentItems?.map((event) => (
            <Col lg={4} md={6} sm={7} key={`${event?._id}-${event?.eventName}`}>
              <SingleProject project={event} />
            </Col>
          ))}
        </Row>
        {isPagination && filteredEvents?.length > itemsPerPage && (
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </section>
  );
};

export default ExploreArea;
