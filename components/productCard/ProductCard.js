import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

function ProductCard({ name, image }) {
  return (
    <Card>
      <Image
        alt="Product Image"
        className="rounded-t-lg aspect-[3/2]"
        src={image}
        height={300}
        width={600}
        //   fill
      />
      <CardContent className="p-4 relative">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 mt-1">$99.99</p>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
