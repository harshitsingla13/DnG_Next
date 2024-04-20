// components/ProductCategoryCarousel.js
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
// import { Paper, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomCard from "./customCards/CustomCards";
import styles from "./ProductCategoryCarousel.module.css";

const useStyles = makeStyles(() => ({
  carousel: {},
  cardContainer: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    padding: 2,
    margin: 1,
    // minWidth: "200px",
    // minHeight: "150px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

const ProductCategoryCarousel = ({ categories }) => {
  // Function to split categories into chunks of cards
  const chunkCategories = (arr, chunkSize) => {
    return Array.from(
      { length: Math.ceil(arr.length / chunkSize) },
      (_, index) => arr.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  };

  // Split categories into chunks of 3 cards each (adjust as needed)
  const chunkedCategories = chunkCategories(categories, 6);

  return (
    <Carousel autoPlay={true} swipe navButtonsAlwaysVisible>
      {/* <div> */}

      {chunkedCategories.map((chunk, index) => (
        <div key={index} className={styles.cardContainer}>
          {chunk.map((category) => (
            <CustomCard
              key={category.id}
              className={styles.card}
              image={category.image} // Replace with your image URL
              //   title={category.name}
              //   subtitle="Card Subtitle"
            />
            // <Paper key={category.id} className={classes.card}>
            //   <Typography variant="h6">{category.name}</Typography>
            // </Paper>
          ))}
        </div>
      ))}

      {/* </div> */}
    </Carousel>
  );
};

export default ProductCategoryCarousel;
