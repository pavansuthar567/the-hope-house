import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Image, Row } from "react-bootstrap";
import FunFactsItem from "./FunFactsItem";
import { getStatistics } from "src/_services/dashboard.service";
import shape1 from "@/images/fun-facts-shape-1.png";
import shape2 from "@/images/fun-facts-shape-2.png";

const FunFacts = ({ className = "" }) => {
  const dispatch = useDispatch();

  const { totalVolunteers, totalEvents, totalDonations, totalTestimonials } =
    useSelector((state) => state.dashboard.statistics);

  const facts = [
    {
      id: 1,
      icon: "flaticon-scrum",
      // count: totalVolunteers,
      // text: "Total Volunteers",
      count: 0,
      text: "Beneficiary Served",
    },
    {
      id: 2,
      icon: "flaticon-mission",
      // count: totalEvents,
      // text: "Total Events",
      count: totalVolunteers,
      text: "Total Volunteers",
    },
    {
      id: 3,
      icon: "flaticon-team",
      // count: totalDonations,
      // text: "Total Donations",
      count: 10,
      text: "City Presence",
    },
    {
      id: 4,
      // icon: "flaticon-increment",
      // count: totalTestimonials,
      // text: "Total Testimonials",
      icon: "flaticon-pay",
      count: 100000,
      text: "Rs. Donation received",
    },
    // {
    //   id: 5,
    //   icon: "flaticon-pay",
    //   count: 0,
    //   text: "Months",
    // },
  ];

  const loadData = useCallback(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section className={`fun-facts-area ${className}`}>
      <Container>
        <Row>
          {facts.map((fact) => (
            <FunFactsItem key={fact.id} fact={fact} />
          ))}
        </Row>
      </Container>
      <div className="fun-facts-shape-1">
        <Image src={shape1.src} alt="" />
      </div>
      <div className="fun-facts-shape-2">
        <Image src={shape2.src} alt="" />
      </div>
    </section>
  );
};

export default FunFacts;
