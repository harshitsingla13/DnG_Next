import React from "react";
import dhruvImage from "../../public/Dhruv.jpeg";
import Image from "next/image";
import styles from "./AboutUsSection.module.scss";
import { Button } from "../ui/button";
import Link from "next/link";

function AboutUsSection({
  showTitle = false,
  truncate = false,
  title = "Let's know about us",
}) {
  const aboutUs = `Welcome to DnG Bakers and Kitchen, your go-to destination for mouthwatering bakery delights and exceptional cloud kitchen services. At DnG Bakers, we pride ourselves on crafting our bakery items using 100% pure Amul ghee, ensuring a rich and authentic taste in every bite.

Our extensive menu features a variety of delectable treats, including pastries, cakes, muffins, toast, bread, customized cakes, and an assortment of unique bread. Whether you're celebrating a special occasion or simply craving a sweet treat, our delicious offerings are sure to delight your taste buds.

In addition to our bakery delights, we offer convenient give-and-take services, making it easier than ever to enjoy our delicious creations. With our cloud kitchen services, you can savour our freshly baked goods from the comfort of your own home.

At DnG Bakers and Kitchen, quality and customer satisfaction are at the heart of everything we do. Join us in experiencing the perfect blend of tradition and taste.`;

  return (
    <div className="mt-5 md:mt-[4.25rem]">
      {/* {showTitle && <span className="text-lg">Let's know about us</span>} */}
      <div className="flex flex-col gap-2  md:flex-row md:gap-12 items-end">
        <div
          className={`relative ${
            showTitle ? "block" : "hidden"
          } md:block md:w-[40%] gap-2 flex-col justify-between`}
        >
          <Image
            src={dhruvImage}
            alt="Call image"
            // fill
            height={450}
            width={430}
            className="aspect-[1]"
          />
        </div>
        <div className="md:ml-auto md:w-[60%]">
          <div className="grid gap-4 p-4 bg-[#cf4f4f] text-[#fff] whitespace-pre-wrap">
            {showTitle && <span className="text-lg font-bold">{title}</span>}
            <div>
              <p className={truncate && styles.about_us_para}>{aboutUs}</p>
              {truncate && (
                <span>
                  <Button variant="link" asChild>
                    <Link
                      href="/about"
                      className={`pl-0 pb-0 h-auto font-bold ${styles.about_us_button}`}
                    >
                      Read more...
                    </Link>
                  </Button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
