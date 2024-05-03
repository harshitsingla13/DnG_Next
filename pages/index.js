import AutoPlayCarousel from "@/components/autoPlayCarousel/AutoPlayCarousel";
import ProductCarouselCard from "@/components/productCarouselCard/ProductCarouselCard";
import TestimonialContainer from "@/components/testimonialContainer/TestimonialContainer";
import { getLocalData } from "@/lib/getLocalData";
import React from "react";

function Home({ categories, testimonials }) {
  return (
    <div className="body_container">
      <AutoPlayCarousel
        data={categories}
        carouselItemContent={ProductCarouselCard}
      />
      <section>Info/About us</section>
      <section>USP</section>
      <TestimonialContainer testimonials={testimonials} />
      <section></section>
    </div>
  );
}

export async function getStaticProps() {
  const localData = await getLocalData("carouselImages");

  return {
    props: {
      items: localData?.carousel,
      categories: localData?.categories,
      testimonials: localData?.testimonials,
    },
  };
}

export default Home;
