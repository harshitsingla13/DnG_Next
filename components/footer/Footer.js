import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import mail from "../../public/mail.svg";
import phone from "../../public/call.svg";
import instagram from "../../public/instagram.svg";
import { Divider } from "@mui/material";

function Footer() {
  const emailId = "dngbakersandkitchen@gmail.com",
    ccEmail = "hsingla08@gmail.com";
  return (
    <footer>
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

        <Divider
          aria-hidden="true"
          variant="middle"
          flexItem
          className={styles.divider}
        />
        <nav className={styles.nav}>
          <p className={styles.nav_list_heading}>Quick Actions</p>
          <ul className={styles.nav_list}>
            <li className={styles.nav_actions}>
              <Link href="#">Home</Link>
            </li>
            <Divider
              aria-hidden="true"
              flexItem
              className={styles.nav_divider}
              orientation="vertical"
            />
            <li className={styles.nav_actions}>
              <Link href="#">Menu</Link>
            </li>
            <Divider
              aria-hidden="true"
              flexItem
              className={styles.nav_divider}
              orientation="vertical"
            />
            <li className={styles.nav_actions}>
              <Link href="#">About Us</Link>
            </li>
            <Divider
              aria-hidden="true"
              flexItem
              className={styles.nav_divider}
              orientation="vertical"
            />
            <li className={styles.nav_actions}>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className={styles.footer_rights}>
        &copy; 2023 DnG Bakers & Kitchen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
