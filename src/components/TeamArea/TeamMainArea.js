import { teamMainArea } from "@/data/teamArea";
import React, { useCallback, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TeamItem from "./TeamItem";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMembers } from "src/_services/team-members.service";

const TeamMainArea = ({ className = "", count = 3 }) => {
  const dispatch = useDispatch();

  const { teamMembersList: teamMembers = [] } = useSelector(
    ({ teamMembers }) => teamMembers
  );

  const loadData = useCallback(() => {
    dispatch(getTeamMembers());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className={`team-main-area ${className}`}>
      <Container>
        <Row className="justify-content-center">
          {teamMembers?.slice(0, count).map((team) => (
            <TeamItem key={`teamMembers_${team._id}`} team={team} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamMainArea;
