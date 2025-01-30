import Head from "next/head";
import React, { useCallback, useEffect } from "react";
import OffCanvasMenu from "../Header/OffCanvasMenu";
import SearchPopup from "../Header/SearchPopup";
import SiteFooter from "../SiteFooter/SiteFooter";
import ScrollToTop from "./ScrollToTop";
import Toast from "../Toast/Toast";
import { useDispatch } from "react-redux";
import { getHome } from "src/_services/home.service";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(getHome("67288fe3a9741c83df931724"));
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          The Hope House - Empowering Communities, Transforming Lives
        </title>
      </Head>
      <main id="wrapper" className="animated fadeIn">
        {children}
        <SiteFooter />
      </main>
      <OffCanvasMenu />
      <SearchPopup />
      <ScrollToTop />
      <Toast />
    </>
  );
};

export default Layout;
