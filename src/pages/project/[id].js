import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getEvent } from "src/_services/events.service"; // Assume this service exists
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ProjectDetailsArea from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsArea";
import ProjectDetailsContent from "@/components/ProjectsArea/ProjectDetails/ProjectDetailsContent";
import SimilarProjects from "@/components/ProjectsArea/SimilarProjects";
import PageTitle from "@/components/Reuseable/PageTitle";
import React, { useCallback, useEffect } from "react";

const SingleProject = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { id } = query;

  const { selectedEvent } = useSelector(({ event }) => event);

  const loadData = useCallback(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      loadData();
    }
  }, [id, loadData]);

  return (
    <Layout>
      <Header />
      <PageTitle title="Events" page="Events" />
      <ProjectDetailsArea project={selectedEvent} />
      <ProjectDetailsContent project={selectedEvent} />
      <SimilarProjects />
    </Layout>
  );
};

export default SingleProject;
