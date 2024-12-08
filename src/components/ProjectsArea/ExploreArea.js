// import { projectsArea } from "@/data/projectsArea";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProject from "./SingleProject";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "src/_services/events.service";
import CustomPagination from "../Pagination/Pagination";
import { useFormik } from "formik";

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

  const formik = useFormik({
    initialValues: {
      selectedYear: "",
      selectedMonth: "",
      selectedVenue: "",
    },
    onSubmit: (values) => {
      setCurrentPage(1);
    },
  });

  // Filter events dynamically
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const eventMonth = new Date(event.startDate).getMonth() + 1;
      const eventYear = new Date(event.startDate).getFullYear();
      return (
        (!formik.values.selectedYear ||
          eventYear === parseInt(formik.values.selectedYear)) &&
        (!formik.values.selectedMonth ||
          eventMonth === parseInt(formik.values.selectedMonth)) &&
        (!formik.values.selectedVenue ||
          event.location.venue === formik.values.selectedVenue)
      );
    });
  }, [
    events,
    formik.values.selectedYear,
    formik.values.selectedMonth,
    formik.values.selectedVenue,
  ]);

  // Generate unique years dynamically
  const uniqueYears = useMemo(() => {
    return [
      ...new Set(
        events.map((event) => new Date(event.startDate).getFullYear())
      ),
    ].sort((a, b) => a - b);
  }, [events]);

  // Generate available months based on selected year
  const availableMonths = useMemo(() => {
    if (!formik.values.selectedYear) return [];
    const months = events
      .filter(
        (event) =>
          new Date(event.startDate).getFullYear() ===
          parseInt(formik.values.selectedYear)
      )
      .map((event) => new Date(event.startDate).getMonth() + 1);
    return [...new Set(months)].sort((a, b) => a - b);
  }, [events, formik.values.selectedYear]);

  // Generate unique venues based on selected year and month
  const uniqueVenues = useMemo(() => {
    if (!formik.values.selectedYear || !formik.values.selectedMonth) return [];
    const venues = events
      .filter(
        (event) =>
          new Date(event.startDate).getFullYear() ===
            parseInt(formik.values.selectedYear) &&
          new Date(event.startDate).getMonth() + 1 ===
            parseInt(formik.values.selectedMonth)
      )
      .map((event) => event.location.venue);
    return [...new Set(venues)].sort();
  }, [events, formik.values.selectedYear, formik.values.selectedMonth]);

  // Paginate filtered events
  const filteredAndPaginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredEvents.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredEvents]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  return (
    <section className="explore-area pt-70 pb-120">
      <Container>
        {events?.length > 0 && (
          <Row className="justify-content-center pb-20">
            <Col lg={12}>
              <form onSubmit={formik.handleSubmit} id="event-filter-form">
                <div className="event-filter-item">
                  <Row>
                    <Col lg={4} md={4} sm={12}>
                      <div className="input-box mt-20">
                        <select
                          name="selectedYear"
                          value={formik.values.selectedYear}
                          onChange={(e) => {
                            formik.handleChange(e);
                            formik.setFieldValue("selectedMonth", "");
                            formik.setFieldValue("selectedVenue", "");
                          }}
                        >
                          <option value="">Select Year</option>
                          {uniqueYears.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <div className="input-box mt-20">
                        <select
                          name="selectedMonth"
                          value={formik.values.selectedMonth}
                          onChange={(e) => {
                            formik.handleChange(e);
                            formik.setFieldValue("selectedVenue", "");
                          }}
                          disabled={!formik.values.selectedYear}
                        >
                          <option value="">Select Month</option>
                          {availableMonths.map((month) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <div className="input-box mt-20">
                        <select
                          name="selectedVenue"
                          value={formik.values.selectedVenue}
                          onChange={formik.handleChange}
                          disabled={
                            !formik.values.selectedYear ||
                            !formik.values.selectedMonth
                          }
                        >
                          <option value="">Select Venue</option>
                          {uniqueVenues.map((venue) => (
                            <option key={venue} value={venue}>
                              {venue}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Col>
                  </Row>
                </div>
              </form>
            </Col>
          </Row>
        )}
        <Row className="justify-content-center">
          {filteredAndPaginatedEvents.map((event) => (
            <Col lg={4} md={6} sm={7} key={`${event?._id}-${event?.eventName}`}>
              <SingleProject project={event} />
            </Col>
          ))}
        </Row>
        {isPagination && filteredEvents.length > itemsPerPage && (
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
    </section>
  );
};

export default ExploreArea;
