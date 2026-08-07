import styles from "../styles/Header.module.css";
import logo from "../assets/img/logo-bare.png";
import { Link } from "react-router";
import { useState } from "react";
import { useLocation } from "react-router";

function Header({
  farmName = "Ressources de la Vallée",
  farmAddress = "Sainte-Anne-de-la-Rochelle, QC",
  logoSrc = logo,
}) {
  const location = useLocation().pathname;

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logoSrc} alt="logo" />
      </div>
      <div className={styles.headerTitle}>
        <h1>{farmName}</h1>
        <address>{farmAddress}</address>
      </div>
      <nav className={styles.headerActions}>
        <ul>
          <li>
            <Link
              to="/"
              className={`${styles.navButton} ${location === "/" ? styles.selected : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={`${styles.navButton} ${location === "/shop" ? styles.selected : ""}`}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`${styles.navButton} ${location === "/cart" ? styles.selected : ""}`}
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
