import CustomCarousel from "@/components/customCarousel/CustomCarousel";
import ProductCategoryCarousel from "@/components/ProductCategoryCarousel";
import PersonCard from "@/components/testimonialContainer/components/testimonial/Testimonial";
import TestimonialContainer from "@/components/testimonialContainer/TestimonialContainer";
import { getLocalData } from "@/lib/getLocalData";
import React from "react";

function Home({ items, categories, testimonials }) {
  return (
    <div className="body_container">
      {/* <CustomCarousel items={items} /> */}
      <ProductCategoryCarousel categories={categories} />
      {/* <section>Products</section> */}
      <section>Info/About us</section>
      <section>USP</section>
      <TestimonialContainer testimonials={testimonials} />
      {/* <PersonCard /> */}
      <section>
        {/* <TestimonialContainer testimonials={testimonials} /> */}
      </section>
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
