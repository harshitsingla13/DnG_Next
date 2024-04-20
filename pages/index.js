import CustomCarousel from "@/components/customCarousel/CustomCarousel";
import ProductCategoryCarousel from "@/components/ProductCategoryCarousel";
import { getLocalData } from "@/lib/getLocalData";
import React from "react";

function Home({ items, categories }) {
  return (
    <div>
      <CustomCarousel items={items} />
      <ProductCategoryCarousel categories={categories} />
      {/* <section>Products</section> */}
      <section>Info/About us</section>
      <section>USP</section>
      <section>Testimonials</section>
    </div>
  );
}

export async function getStaticProps() {
  const localData = await getLocalData("carouselImages");

  return {
    props: { items: localData?.carousel, categories: localData?.categories },
  };
}

export default Home;
