import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [stickyHeader, setStickyHeader] = useState(false);
  //   const [showNavbar, setShowNavbar] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //   const handleShowNavbar = () => {
  //     setShowNavbar(!showNavbar);
  //   };
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setStickyHeader(true);
      } else if (stickyHeader) {
        //remove the background property so it comes transparent again (defined in your css)
        setStickyHeader(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header className={`${styles.header_container}`}>
      <div className={`${styles.header} ${stickyHeader ? "active" : ""}`}>
        <div className={`${styles.logo_container}`}>
          <Link className={`${styles.logo_container_anchor}`} href="/">
            <Image
              width={100}
              height={100}
              className={`${styles.logo}`}
              // src="/DnG.jpeg"
              src="/logo.svg"
              alt="DnG Bakers and Kitchen logo"
            />
            {/* <Logo className={`${styles.logo}`} /> */}
            <div className={`${styles.logo_name_container}`}>
              <h1>
                {/* <span> */}
                DnG Bakers & Kitchen
                {/* </span> */}
              </h1>
              {/* <span>Amazza</span> */}
            </div>
          </Link>
        </div>
        <nav className={`${styles.nav_items}`}>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link href="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link href="/menu" className={`${styles.navLink}`}>
                Menu
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link href="/contact" className={`${styles.navLink}`}>
                Contact Us
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link href="about" className={`${styles.navLink}`}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
