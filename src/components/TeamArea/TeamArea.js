import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const bg =
  "https://plus.unsplash.com/premium_photo-1661277666101-01fb123f2a4c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D";

const TeamArea = () => {
  return (
    <section
      className="team-area bg_cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <Title
              title={"Experienced People"}
              tagline={"Meet Our Team Members"}
              className="section-title-2 text-center"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamArea;
