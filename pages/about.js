import AboutUsSection from "@/components/aboutUsSection/AboutUsSection";
import Image from "next/image";
import dhruvImage from "../public/banner_1.png";
import React from "react";

function About() {
  return (
    <div>
      <h2 className="my-6 text-3xl font-bold">About Us</h2>
      <div className="relative h-[200px] md:h-[450px]">
        <Image
          priority
          src={dhruvImage}
          alt="Call image"
          fill
          // height={400}
          // width={300}
          // className="aspect-3/2"
        />
      </div>
      <AboutUsSection showTitle={true} title="About Our Bakery" />
    </div>
  );
}

export default About;
