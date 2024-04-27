import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  //   const [showNavbar, setShowNavbar] = useState(false);
  // const isHamburgerActive = useMediaQuery((theme) =>
  //   theme.breakpoints.down("sm")
  // );
  const [isActive, setIsActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
    const listener = (e) => {
      const header = document.getElementById("header"); // Get the header element
      const sticky = header.offsetTop; // Get the offset position of the header
      const companyTitle = document.getElementById("company_heading"); // Get the header element
      const navList = document.getElementsByClassName("nav_list"); // Get the header element
      const navLink = document.getElementsByClassName(styles.navLink);
      const crossIcon = document.getElementsByClassName(styles.bar);
      const navMenu = document.getElementsByClassName("navMenus");

      if (window.scrollY > sticky) {
        header.classList.add(styles.sticky); // Add a class to the header when it becomes sticky
        companyTitle.classList.add(styles.sticky_color_change);
        !isSticky && setIsSticky(true);
        for (let key in crossIcon) {
          if (crossIcon.hasOwnProperty(key)) {
            var val = crossIcon[key];
            val.classList.add(styles.bar_sticky);
          }
        }
        for (let key in navLink) {
          if (navLink.hasOwnProperty(key)) {
            var val = navLink[key];
            val.classList.add(styles.color_change_sticky);
          }
        }
        for (let key in navList) {
          if (navList.hasOwnProperty(key)) {
            var val = navList[key];
            val.classList.add(styles.sticky_color_change);
          }
        }
        // navList.forEach((nav) => nav.classList.add(styles.sticky_color_change));
      } else {
        header.classList.remove(styles.sticky); // Remove the class when it is no longer sticky
        companyTitle.classList.remove(styles.sticky_color_change);
        setIsSticky(false);
        for (let key in crossIcon) {
          if (crossIcon.hasOwnProperty(key)) {
            var val = crossIcon[key];
            val.classList.remove(styles.bar_sticky);
          }
        }
        for (let key in navLink) {
          if (navLink.hasOwnProperty(key)) {
            var val = navLink[key];
            val.classList.remove(styles.color_change_sticky);
          }
        }
        for (let key in navList) {
          if (navList.hasOwnProperty(key)) {
            var val = navList[key];
            val.classList.remove(styles.sticky_color_change);
          }
        }
      }
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("removed");
      });
    };
  }, []);

  return (
    <header className={`${styles.header_container}`}>
      <div id="header" className={`${styles.header}`}>
        <div className={`${styles.logo_container}`}>
          <Link className={`${styles.logo_container_anchor}`} href="/">
            <Image
              width={100}
              height={100}
              // fill={true}
              className={`${styles.logo}`}
              // src="/DnG.jpeg"
              src="/logo.svg"
              alt="DnG Bakers and Kitchen logo"
            />
            {/* <Logo className={`${styles.logo}`} /> */}
            <div className={`${styles.logo_name_container}`}>
              <h1 id="company_heading">
                {/* <span> */}
                DnG Bakers & Kitchen
                {/* </span> */}
              </h1>
              {/* <span>Amazza</span> */}
            </div>
          </Link>
        </div>
        <nav className={`${styles.nav_items}`}>
          <ul
            className={`navMenus ${styles.navMenu} ${
              isActive ? styles.active : ""
            } ${isSticky ? styles.navMenu_sticky : ""}`}
          >
            <li className="nav_list" onClick={removeActive}>
              <Link href="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li className="nav_list" onClick={removeActive}>
              <Link href="/menu" className={`${styles.navLink}`}>
                Menu
              </Link>
            </li>
            <li className="nav_list" onClick={removeActive}>
              <Link href="/contact" className={`${styles.navLink}`}>
                Contact Us
              </Link>
            </li>
            <li className="nav_list" onClick={removeActive}>
              <Link href="about" className={`${styles.navLink}`}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""} `}
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
