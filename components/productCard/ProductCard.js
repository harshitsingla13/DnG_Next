import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import styles from "./ProductCard.module.css";

function ProductCard({
  name,
  image,
  productPageName="",
  price="",
  fromCarousel,
  onClickHandler,
  isDesktop,
  ...restProps
}) {
  if (fromCarousel) {
    name = restProps.data.name;
    image = restProps.data.image;
  }
  else {
    name = productPageName===""?name:productPageName
  }

  return (
    <Card className={restProps.style} onClick={() => onClickHandler?.(name)}>
      <CardContent className="p-0 relative aspect-3/2">
        <Image
          alt="Product Image"
          className="rounded-t-lg aspect-[3/2] hover:scale-105"
          src={image}
          style={{ objectFit: "contain" }}
          height={300}
          width={600}
          // fill
        />
        <div
          className={`absolute left-0 
            ${!fromCarousel && `hidden`}
            ${
              isDesktop ? "bottom-0" : "top-0 rotate-180"
            } flex justify-center w-full ${styles.textBackground}`}
        >
          <span
            className={`text-2xl font-semibold z-10 ${
              !isDesktop && "rotate-180"
            } ${styles.textColor}`}
          >
            {name}
          </span>
        </div>
        {/* <span className={`text-lg font-semibold ${!fromCarousel && `hidden`}`}>
          {name}
        </span> */}
        <div className={`p-4 ${fromCarousel && `hidden`}`}>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">&#8377; {price===""?"-":price}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
