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
        <div className={styles.cartTitleLine}>
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

  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itemsInCart.map((item) => (
            <CartItem key={item.title} item={item} />
          ))}
        </tbody>
      </table>
      <div className={styles.cartFooter}>
        <div className={styles.cartBlocks}>
          <h3>Subtotal</h3>
          <p>{formatCurrency(subtotal)}</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
