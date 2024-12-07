import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import BlogDetails from "@/components/NewsArea/BlogDetails/BlogDetails";
import PageTitle from "@/components/Reuseable/PageTitle";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "src/_services/blog.service";

const SingleNews = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { id } = query;

  const { selectedBlog } = useSelector(({ blog }) => blog);

  const loadData = useCallback(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      loadData();
    }
  }, [id, loadData]);

  return (
    <Layout>
      <Header />
      <PageTitle title="News" />
      <BlogDetails blog={selectedBlog} />
    </Layout>
  );
};

export default SingleNews;
