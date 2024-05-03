import React from "react";
import styles from "./Testimonial.module.css";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

const Testimonial = ({ data }) => {
  return (
    <Card className="w-full">
      <Avatar className="m-auto w-12 h-12">
        <AvatarImage src={data.image} />
        <AvatarFallback>{data.name}</AvatarFallback>
      </Avatar>
      {/* <Image
        alt={name + " image"}
        className="rounded-t-lg w-full h-48 object-cover"
        height={400}
        src={image}
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width={600}
        fill
      /> */}
      <CardContent className="space-y-4 p-2">
        <blockquote className="text-lg font-semibold leading-snug">
          “The customer service I received was exceptional. The support team
          went above and beyond to address my concerns.”
        </blockquote>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JW</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{data.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              CEO, Acme Inc
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    // <Card className={styles.card}>
    //   <Avatar className={styles.avatar}>
    //     <AvatarImage src={image} />
    //     <AvatarFallback>{name}</AvatarFallback>
    //   </Avatar>
    //   <CardContent className={styles.content}>
    //     <div className="grid">
    //       <div>
    //         <span variant="body2" color="textSecondary" align="center">
    //           {city}
    //         </span>
    //       </div>
    //       <div>
    //         <span variant="h5" align="center">
    //           {name}
    //         </span>
    //       </div>
    //       <div>
    //         <span variant="body1">{content}</span>
    //       </div>
    //     </div>
    //   </CardContent>
    // </Card>
  );
};

export default Testimonial;
