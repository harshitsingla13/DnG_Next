"use client";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./AutoPlayCarousel.module.css";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";

const AutoPlayCarousel = ({ data, carouselItemContent }) => {
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
          {data.map((singleData, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              {carouselItemContent({ data: singleData, isDestop: isDesktop })}
              {/* <CarouselItemContent data={singleData} /> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        {isDesktop && (
          <>
            <CarouselPrevious className="bg-[#fffbc9] border-transparent" />
            <CarouselNext className="bg-[#fffbc9] border-transparent" />
          </>
        )}
        {!isDesktop && (
          <div
            className={`flex items-center justify-center gap-2 absolute bottom-0 w-[100%] m-auto h-5 ${styles.mobile_navigation_button}`}
          >
            {data.map((_, index) => (
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

export default AutoPlayCarousel;
