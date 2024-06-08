import AutoPlayCarousel from "@/components/autoPlayCarousel/AutoPlayCarousel";
import ProductCard from "@/components/productCard/ProductCard";
import { getLocalData } from "@/lib/getLocalData";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

function Menu({ products, setOpen, setFormDefaultValue }) {
  const productKeys = Object.keys(products) ?? [];

  const convertToRunningCase = (sentence) => {
    const words = sentence.split(" ");

    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  };

  return (
    <Fragment>
      <div className="flex justify-between my-6 font-bold">
        <h2 className="text-3xl">Menu</h2>
        <Link
          className="flex gap-2 items-center"
          href="/DnG_Bakers_and_Kitchen-Menu.pdf"
          download
          target="_blank"
        >
          <span className="hidden sm:block">Download Full Menu</span>
          <Image
            alt="download icon"
            src="/download.svg"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        {productKeys.length > 0 &&
          productKeys.map((productId) => {
            return (
              <div key={productId}>
                <div className="flex justify-between text-lg bg-[#cf4f4f] text-[#fff] rounded p-1">
                  <h1>
                    {convertToRunningCase(
                      products[productId]?.title ?? productId
                    )}
                  </h1>
                  <Link href={"/menu/" + productId}>{"View All >"}</Link>
                </div>
                <AutoPlayCarousel
                  data={products[productId]?.varieties}
                  carouselItemContent={ProductCard}
                  onClickHandler={(productName) => {
                    setOpen((prev) => !prev);
                    setFormDefaultValue((prev) => ({
                      ...prev,
                      orderDetail: productName,
                    }));
                  }}
                  style="cursor-pointer"
                />
              </div>
            );
          })}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const localData = await getLocalData("products");

  return {
    props: {
      products: localData.products,
    },
  };
}

export default Menu;
