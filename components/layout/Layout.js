import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import FloatingButton from "../floatingButton/FloatingButton.js";
import DialogWithButton from "../dialogWithButton/DialogWithButton.js";

export const Layout = (props) => {
  const { children } = props;

  const onClickHandler = () => {
    console.log("Hi Button");
  };

  return (
    <div className="min-h-screen">
      <Header />
      {/* shimmer skeleton loader */}
      {/* {isLoading && <Shimmer />} */}

      {/* artist component */}
      <main
        className="py-5 px-7 md:py-9 md:px-12 #000"
        // style={{ padding: "36px 48px", color: "#000000" }}
      >
        {children}
      </main>
      {/* <FloatingButton buttonProps={{ onClick: onClickHandler }} /> */}
      <DialogWithButton />
      {/* {component} */}

      <Footer />
    </div>
  );
};
