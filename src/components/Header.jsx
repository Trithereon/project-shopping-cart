import styles from "../styles/Header.module.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.headerTitle}>
        <h1>Ressources de la Vallée</h1>
        <span>Sainte-Anne-de-la-Rochelle, QC</span>
      </div>
      <div className={styles.line}></div>
      <nav className={styles.headerActions}>
        <ul>
          <li>
            <Link to="/" className={styles.navButton}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={styles.navButton}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.navButton}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
