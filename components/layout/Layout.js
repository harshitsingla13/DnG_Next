import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Navbar from "../header/Navbar.js";

export const Layout = (props) => {
  const { showHeader = true, showFooter = false, children } = props;

  return (
    <>
      {showHeader && (
        <Header />
        //   <Header
        //     isUserLoggedIn={false}
        //     announcementBar={null}
        //     appName="homepage"
        //     onNavClickHandler={() => {
        //       //
        //     }}
        //   />
      )}

      {/* shimmer skeleton loader */}
      {/* {isLoading && <Shimmer />} */}

      {/* artist component */}
      <main style={{ padding: "0px 48px", color: "#000000" }}>{children}</main>
      {/* {component} */}

      {showFooter && <Footer appName="homepage" testID="family-footer" />}
    </>
  );
};
