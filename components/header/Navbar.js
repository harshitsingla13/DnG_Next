import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <Link href="/home" className={`${styles.logo}`}>
            Dev.{" "}
          </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li className={`${styles.nav_menu_list}`} onClick={removeActive}>
              <Link href="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li className={`${styles.nav_menu_list}`} onClick={removeActive}>
              <Link href="/menu" className={`${styles.navLink}`}>
                Menu
              </Link>
            </li>
            <li className={`${styles.nav_menu_list}`} onClick={removeActive}>
              <Link href="/contact" className={`${styles.navLink}`}>
                Contact Us
              </Link>
            </li>
            <li className={`${styles.nav_menu_list}`} onClick={removeActive}>
              <Link href="about" className={`${styles.navLink}`}>
                About Us
              </Link>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
