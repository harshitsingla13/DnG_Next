"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Testimonial from "./components/testimonial/Testimonial";
import AutoPlayCarousel from "../autoPlayCarousel/AutoPlayCarousel";

const TestimonialContainer = ({ testimonials }) => {
  return (
    <AutoPlayCarousel data={testimonials} carouselItemContent={Testimonial} />
    // <div className="flex justify-center items-center ">

    //   <Carousel
    //     // plugins={[
    //     //   Autoplay({
    //     //     delay: 2000,
    //     //     speed: 1,
    //     //   }),
    //     // ]}
    //     opts={{
    //       align: "start",
    //       dragFree: true,
    //       loop: true,
    //     }}
    //     className="w-full max-w-4xl"
    //   >
    //     <CarouselContent>
    //       {testimonials.map((testimonial, index) => (
    //         <CarouselItem
    //           key={index}
    //           className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 relative"
    //         >
    //           <Testimonial key={testimonial.id ?? index} image="" />

    //           {/* <CardContent className="relative flex aspect-square items-center justify-center p-6">
    //                 <Image
    //                   sizes="100%"
    //                   style={{ objectFit: "cover" }}
    //                   src={testimonial.image}
    //                   alt={testimonial.name}
    //                   fill
    //                 />
    //                 <div
    //                   className={`absolute bottom-0 flex justify-center w-full ${styles.textBackground}`}
    //                 >
    //                   <span
    //                     className={`text-2xl font-semibold z-10 ${styles.textColor}`}
    //                   >
    //                     {testimonial.name}
    //                   </span>
    //                 </div>
    //               </CardContent> */}
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //     <CarouselPrevious />
    //     <CarouselNext />
    //   </Carousel>
    // </div>
    // <Carousel className={styles.carouselContainer} autoPlay={false} swipe>

    //   {chunkedTestimonials.map((chunk, index) => (
    //     <div key={index} className={styles.cardContainer}>
    //       {chunk.map((testimonial, index) => (
    //         <Testimonial
    //           key={testimonial.id ?? index}
    //           image=""
    //         />
    //       ))}
    //     </div>
    //   ))}

    // </Carousel>
  );
};

export default TestimonialContainer;
