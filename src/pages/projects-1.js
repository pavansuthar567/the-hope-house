import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ExploreArea from "@/components/ProjectsArea/ExploreArea";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const Projects = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Events" />
      <ExploreArea isPagination={true} />
    </Layout>
  );
};

export default Projects;
