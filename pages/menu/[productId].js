import ProductCard from "@/components/productCard/ProductCard";
import { getLocalData } from "@/lib/getLocalData";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ProductPage({ products, setOpen, setFormDefaultValue }) {
  const router = useRouter();
  const [productsToShow, setProductsToShow] = useState([]);

  const productId = router.query.productId;

  useEffect(() => {
    const prod = products[productId] ?? [];
    setProductsToShow(prod?.varieties);
  }, [products, productId]);

  //Send a request to backend to fetch data using API and its id

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {productsToShow.map((product) => (
        <div
          key={product?.id}
          className="cursor-pointer"
          onClick={() => {
            setOpen((prev) => !prev);
            setFormDefaultValue((prev) => ({
              ...prev,
              orderDetail: product.name,
            }));
          }}
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps() {
  const localData = await getLocalData("products");

  return {
    props: {
      products: localData.products,
    },
  };
}

export default ProductPage;
