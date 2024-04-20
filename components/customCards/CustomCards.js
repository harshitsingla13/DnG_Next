import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styles from "./CustomCards.module.css";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  card: {
    position: "relative",
    width: "144px",
    height: "180px",
    borderRadius: 2,
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  content: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 2,
    color: "fff",
  },
}));

const CustomCard = ({ image, title, subtitle }) => {
  //   const styles = useStyles();
  //   console.log(styles.image);

  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.image}
        image={image}
        // title={props.item.name}
      ></CardMedia>
      {/* <Image
        src={image}
        alt={title}
        className={styles.image}
        width={100}
        height={100}
      /> */}
      <CardContent className={styles.content}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
