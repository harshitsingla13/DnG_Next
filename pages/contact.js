import { InputForm } from "@/components/dialogWithButton/Form";
import Image from "next/image";
import React from "react";
import customerCare from "../public/call_center.png";
import Link from "next/link";
import mail from "../public/mail.svg";
import phone from "../public/call.svg";
import instagram from "../public/instagram.svg";

function Contact() {
  const emailId = "dngbakersandkitchen@gmail.com",
    ccEmail = "hsingla08@gmail.com";

  return (
    <div>
      <h2 className="my-6 text-3xl font-bold">Contact Us</h2>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="relative md:w-[40%] flex gap-2 flex-col justify-between">
          <Image
            src={customerCare}
            alt="Call image"
            // fill
            // height={200}
            // width={300}
            className="aspect-3/2"
          />
          <div className="flex gap-2 flex-col">
            <Link
              href="tel:7292043252"
              className="flex flex-row gap-2 flex-wrap pl-2 font-bold"
            >
              <Image alt="phone" src={phone} />
              <span>7292043252</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/dng_bakers/"
              className="flex flex-row gap-2 flex-wrap pl-2 font-bold"
              // className={styles.social_links}
            >
              <Image width={20} height={20} alt="instagram" src={instagram} />
              <span>dng_bakers</span>
            </Link>
            <Link
              href={`mailto:${emailId}?cc=${ccEmail}&subject=Inquiry`}
              className="flex flex-row gap-2 flex-wrap pl-2 font-bold"
              // className={styles.social_links}
            >
              <Image alt="mail" src={mail} />
              <span>{emailId}</span>
            </Link>
          </div>
        </div>
        <div className="md:ml-auto md:w-[60%]">
          <div className="grid gap-4 p-4 bg-[#cf4f4f] text-[#fff]">
            Fill the below Form
            <InputForm radioButtonStyle={"bg-white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
