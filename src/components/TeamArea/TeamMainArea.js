import { teamMainArea } from "@/data/teamArea";
import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, Pagination } from "react-bootstrap";
import TeamItem from "./TeamItem";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMembers } from "src/_services/team-members.service";
import CustomPagination from "../Pagination/Pagination";

const itemsPerPage = 8;

const TeamMainArea = ({ className = "", count, isPagination = false }) => {
  const dispatch = useDispatch();

  const {
    teamMembersList: teamMembers = [],
    filteredTeamMembersList: filteredTeamMembers = [],
  } = useSelector(({ teamMembers }) => teamMembers);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredTeamMembers.length / itemsPerPage);

  const loadData = useCallback(() => {
    dispatch(getTeamMembers());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = isPagination
    ? filteredTeamMembers.slice(startIndex, startIndex + itemsPerPage)
    : filteredTeamMembers?.slice(0, count || teamMembers?.length);

  return (
    <div className={`team-main-area ${className}`}>
      <Container>
        <Row className="justify-content-center">
          {currentItems.map((team) => (
            <TeamItem key={`teamMembers_${team._id}`} team={team} />
          ))}
        </Row>
        {isPagination && (
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </Container>
    </div>
  );
};

export default TeamMainArea;
