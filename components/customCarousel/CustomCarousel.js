import React from "react";
import Item from "./components/Item";
import Carousel from "react-material-ui-carousel";

function CustomCarousel({ items }) {
  return (
    <section>
      <Carousel
        indicatorIconButtonProps={{
          style: {
            color: "blue", // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "red", // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: 0,
            zIndex: 1,
          },
        }}
      >
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    </section>
  );
}

export default CustomCarousel;
