import {
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Item.module.css";
import Link from "next/link";
import withConditionalNavigation from "@/hoc/withConditionalNavigation";

function Item(props) {
  return (
    <Card raised className={`${styles.Banner}`}>
      <Grid container spacing={0} className={`${styles.BannerGrid}`}>
        <Grid item xs={12} key={props.item.name}>
          <CardMedia
            className={`${styles.Media}`}
            image={props.item.imageURL}
            title={props.item.name}
          >
            {/* <Image
              src={props.item.imageURL}
              alt={props.item.name}
              width={100}
              height={100}
            /> */}
            <Typography className={`${styles.MediaCaption}`}>
              {props.item.name}
            </Typography>
          </CardMedia>
        </Grid>
      </Grid>
    </Card>
    // <Paper style={{ width: "100%", height: "100px" }}>
    //   <div
    //     style={{
    //       backgroundImage: `url(${props.item.imageURL})`,
    //       width: "100%",
    //       height: "100%",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     {/* <Image
    //     src={props.item.imageURL}
    //     alt="Demo image"
    //     width={100}
    //     height={100}
    //   /> */}
    //     <h2>{props.item.name}</h2>
    //     <p>{props.item.description}</p>
    //   </div>

    //   <Button className="CheckButton">Check it out!</Button>
    // </Paper>
  );
}

export default withConditionalNavigation(Item);
