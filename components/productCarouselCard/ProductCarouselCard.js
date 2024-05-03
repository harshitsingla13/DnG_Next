import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import styles from "./ProductCarouselCard.module.css";
import Link from "next/link";

function ProductCarouselCard({ data, isDesktop }) {
  return (
    <Card>
      <Link href={data.navigateTo}>
        <CardContent
          className="relative aspect-3/2"
          // className="relative flex aspect-square items-center justify-center p-6"
        >
          <Image
            sizes="100%"
            style={{ objectFit: "contain" }}
            src={data.image}
            alt={data.name}
            fill
            className="hover:scale-105"
          />
          <div
            className={`absolute left-0 ${
              isDesktop ? "bottom-0" : "top-0 rotate-180"
            } flex justify-center w-full ${styles.textBackground}`}
          >
            <span
              className={`text-2xl font-semibold z-10 ${
                !isDesktop && "rotate-180"
              } ${styles.textColor}`}
            >
              {data.name}
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default ProductCarouselCard;
