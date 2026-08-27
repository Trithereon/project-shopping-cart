import styles from "../styles/Header.module.css";
import { Link, useLocation } from "react-router";
import { AppContext } from "../App";
import { useContext } from "react";

function HeaderActions() {
  const location = useLocation().pathname;
  const { itemsInCart } = useContext(AppContext);

  return (
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
        <li className={styles.cartListItem}>
          <Link
            to="/cart"
            className={`${styles.navButton} ${location === "/cart" ? styles.selected : ""}`}
          >
            Cart
          </Link>
          <div data-testid="item-count" className={styles.itemCount}>
            {itemsInCart.length > 0 ? itemsInCart.length : ""}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderActions;
