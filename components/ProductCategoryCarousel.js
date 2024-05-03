"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./ProductCategoryCarousel.module.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";

const ProductCategoryCarousel = ({ categories }) => {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() ?? 0);
    });
  }, [api]);

  const handleSelect = (index) => {
    if (!api) return;
    api.scrollTo(index);
  };

  const handleMouseLeave = () => {
    if (api) {
      api.plugins().autoplay?.play();
    }
  };

  console.log(categories);

  return (
    <div
      onMouseLeave={handleMouseLeave}
      // className="flex justify-center items-center max-h-[220px] m-auto sm:max-h-[440px] md:max-h-[unset] md:m-[unset]"
    >
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
            speed: 1,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "start",
          dragFree: true,
          loop: true,
        }}
        // className="w-full max-h-[220px] sm:max-h-[440px] md:max-h-[unset]"
      >
        <CarouselContent className="max-h-[220px] sm:max-h-[440px] md:max-h-[unset]">
          {categories.map((category, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card>
                <Link href={category.navigateTo}>
                  <CardContent
                    className="relative aspect-3/2"
                    // className="relative flex aspect-square items-center justify-center p-6"
                  >
                    <Image
                      sizes="100%"
                      style={{ objectFit: "contain" }}
                      src={category.image}
                      alt={category.name}
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
                        {category.name}
                      </span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {isDesktop && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
        {!isDesktop && (
          <div
            className={`flex items-center justify-center gap-2 absolute bottom-0 w-[100%] m-auto h-5 ${styles.mobile_navigation_button}`}
          >
            {categories.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-[#fff604]" : "bg-gray-300"
                }`}
                onClick={() => handleSelect(index)}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default ProductCategoryCarousel;
