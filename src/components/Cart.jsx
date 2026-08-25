import { CartContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router";
import styles from "../styles/Cart.module.css";
import CartItem from "./CartItem";
import { formatCurrency } from "../utils/utils.jsx";

function Cart() {
  const { itemsInCart, addToCart } = useContext(CartContext);

  return (
    <main>
      <div className={styles.cartContainer}>
        <div
          className={`${styles.cartTitleLine} ${itemsInCart.length === 0 ? styles.empty : ""}`}
        >
          <h2>Your cart {itemsInCart.length > 0 ? "" : "is empty."}</h2>
          <Link className={styles.shop} to="/shop">
            <h3>Continue shopping</h3>
          </Link>
        </div>
        {itemsInCart.length > 0 ? <CartContent /> : null}
      </div>
    </main>
  );
}

function CartContent() {
  const { itemsInCart, addToCart } = useContext(CartContext);
  const subtotal = itemsInCart.reduce(
    (acc, item) => item.price * item.count + acc,
    0,
  );

  function handleCheckout() {
    alert(
      `Thank you for shopping with us!\nWe appreciate your business.\nThe checkout process is not yet implemented, so please give us a call instead.`,
    );
  }

  return (
    <>
      <table className={styles.cartContent}>
        <thead>
          <tr>
            <th className={styles.header}>Product</th>
            <th className={styles.header}>Quantity</th>
            <th className={styles.header}>Total</th>
          </tr>
        </thead>
        <tbody>
          {itemsInCart.map((item) => (
            <CartItem key={item.title} item={item} />
          ))}
        </tbody>
      </table>
      <div className={styles.cartFooter}>
        <div className={styles.cartFooterContent}>
          <h3>Subtotal</h3>
          <p className={styles.subtotal}>{formatCurrency(subtotal)}</p>
          <small>Taxes and shipping calculated at checkout</small>
          <button
            onClick={handleCheckout}
            className={`${styles.shop} ${styles.checkOut}`}
          >
            Check out
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
