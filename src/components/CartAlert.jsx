import styles from "../styles/CartAlert.module.css";
import { CartContext } from "../App";
import { ShopContext } from "./Shop";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router";
import x from "../assets/img/x.svg";

/* 
    The alert that pops up when an item is added to cart.
    It informs the user of the location of the cart.
    It makes the app flow more obvious. 
*/

function CartAlert() {
  const { itemsInCart } = useContext(CartContext);
  const latestItem = itemsInCart[itemsInCart.length - 1];
  const { setIsAlerted } = useContext(ShopContext);

  function handleClose() {
    setIsAlerted(false);
  }

  return (
    <div className={styles.cartAlert}>
      <div className={styles.titleLine}>
        <p>✔ Item added to your cart</p>
        <button className={styles.xBtn} onClick={handleClose}>
          <img className={styles.xImg} src={x} alt="close" />
        </button>
      </div>
      <table>
        <CartItem item={latestItem} alert={true} />
      </table>
      <Link
        className={styles.viewCartBtn}
        to="/cart"
      >{`View your cart (${itemsInCart.length} item${itemsInCart.length > 1 ? "s" : ""})`}</Link>
    </div>
  );
}

export default CartAlert;
