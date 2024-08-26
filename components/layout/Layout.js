import Footer from "../footer/Footer.js";
import DialogWithButton from "../dialogWithButton/DialogWithButton.js";
import Header1 from "../header/Header1.js";
import { useState } from "react";

export const Layout = (props) => {
  const { children } = props;

  return (
    <div className="min-h-screen max-w-[1728px] m-auto bg-[#fff]">
      {/* <Header /> */}
      <Header1 />
      {/* shimmer skeleton loader */}
      {/* {isLoading && <Shimmer />} */}

      {/* artist component */}
      <main
        className="bg-[#fff] py-5 px-7 md:py-9 md:px-12 #000"
        // style={{ padding: "36px 48px", color: "#000000" }}
      >
        {children}
      </main>
      <DialogWithButton
        open={props.open}
        setOpen={props.setOpen}
        defaultValue={props.defaultValue}
      />

      <Footer />
    </div>
  );
};
