import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import mail from "../../public/mail.svg";
import phone from "../../public/call.svg";
import instagram from "../../public/instagram.svg";
import { Separator } from "@/components/ui/separator";

function Footer() {
  const emailId = "dngbakersandkitchen@gmail.com",
    ccEmail = "hsingla08@gmail.com";
  return (
    <footer className="border-t-[#ddd77c] border-solid border-t-1 px-4 py-2 bg-white md:px-12">
      <div className="footer-content">
        <div>
          {/* <p className={styles.font_size}>Contact for more</p> */}
          <div className={styles.social_links_container}>
            <Link href="tel:7292043252" className={styles.social_links}>
              <Image alt="phone" src={phone} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/dng_bakers/"
              className={styles.social_links}
            >
              <Image width={20} height={20} alt="instagram" src={instagram} />
            </Link>
            <Link
              href={`mailto:${emailId}?cc=${ccEmail}&subject=Inquiry`}
              className={styles.social_links}
            >
              <Image alt="mail" src={mail} />
            </Link>
          </div>
        </div>

        <Separator className={`${styles.divider}`} decorative />
        <nav className={`${styles.nav} flex justify-between`}>
          <span className="">
            <p className={styles.nav_list_heading}>Quick Actions</p>
            <ul
              className={`${styles.nav_list} flex-col flex-wrap justify-center text-center md:flex-row`}
            >
              <li className={styles.nav_actions}>
                <Link href="/">Home</Link>
              </li>
              <Separator
                orientation="vertical"
                decorative
                className="h-6 self-center hidden md:block"
              />
              <li className={styles.nav_actions}>
                <Link href="/menu">Menu</Link>
              </li>
              <Separator
                className="h-6 self-center hidden md:block"
                orientation="vertical"
                decorative
              />
              <li className={styles.nav_actions}>
                <Link href="/about">About Us</Link>
              </li>
              <Separator
                className="h-6 self-center hidden md:block"
                orientation="vertical"
                decorative
              />
              <li className={styles.nav_actions}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </span>
          {/* <div
            className={`${styles.social_links_container} self-end hidden md:flex`}
          >
            <Link href="tel:7292043252" className={styles.social_links}>
              <Image alt="phone" src={phone} />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/dng_bakers/"
              className={styles.social_links}
            >
              <Image width={20} height={20} alt="instagram" src={instagram} />
            </Link>
            <Link
              href={`mailto:${emailId}?cc=${ccEmail}&subject=Inquiry`}
              className={styles.social_links}
            >
              <Image alt="mail" src={mail} />
            </Link>
          </div> */}
          <span className="w-[40%]">
            <p className={styles.nav_list_heading}>Categories</p>
            <ul
              className={`${styles.nav_list} flex-col flex-wrap justify-center text-center md:flex-row`}
            >
              <li className={styles.nav_actions}>
                <Link href="/menu/cakes">Cakes</Link>
              </li>
              <Separator
                orientation="vertical"
                decorative
                className="h-6 self-center hidden md:block"
              />
              <li className={styles.nav_actions}>
                <Link href="/menu/biscuits">Biscuits</Link>
              </li>
              <Separator
                className="h-6 self-center hidden md:block"
                orientation="vertical"
                decorative
              />
              <li className={styles.nav_actions}>
                <Link href="/menu/cupcakes">Cupcakes</Link>
              </li>
              <Separator
                className="h-6 self-center hidden md:block"
                orientation="vertical"
                decorative
              />
              <li className={styles.nav_actions}>
                <Link href="/menu/breads">Breads</Link>
              </li>
              <Separator
                className="h-6 self-center hidden md:block"
                orientation="vertical"
                decorative
              />
              <li className={styles.nav_actions}>
                <Link href="/menu/ice-cream">Ice-cream</Link>
              </li>
            </ul>
          </span>
        </nav>
      </div>
      <p className={styles.footer_rights}>
        &copy; 2024 DnG Bakers & Kitchen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
