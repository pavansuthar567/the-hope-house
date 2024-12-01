import Head from "next/head";
import React from "react";
import OffCanvasMenu from "../Header/OffCanvasMenu";
import SearchPopup from "../Header/SearchPopup";
import SiteFooter from "../SiteFooter/SiteFooter";
import ScrollToTop from "./ScrollToTop";
import Toast from "../Toast/toast";

const Layout = ({ children }) => {
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
