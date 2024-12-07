import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsArea from "@/components/NewsArea/NewsArea";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const News = () => {
  return (
    <Layout>
      <Header />
      <PageTitle title="News" />
      <NewsArea
        className="news-2-area news-page-area"
        newsTwo
        newsPage
        isPagination={true}
      />
    </Layout>
  );
};

export default News;
