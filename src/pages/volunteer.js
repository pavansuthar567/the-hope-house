import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/Reuseable/PageTitle";
import VolunteerFormArea from "@/components/VolunteerArea/VolunteerFormArea";
import React from "react";

const Volunteer = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="Volunteer" />
      <VolunteerFormArea />
    </Layout>
  );
};

export default Volunteer;
