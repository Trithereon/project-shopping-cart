import styles from "../styles/QuantityInput.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../App";

function QuantityInput({ item }) {
  const { itemsInCart, addToCart, updateItemCount } = useContext(CartContext);
  const cartIndex = itemsInCart.findIndex(
    (product) => product.title === item.title,
  );
  const itemCount = itemsInCart[cartIndex].count;

  function handlePlus() {
    if (itemCount < 99) updateItemCount(item, item.count + 1);
    return;
  }

  function handleMinus() {
    if (itemCount > 1) updateItemCount(item, item.count - 1);
    return;
  }

  function handleChange(e) {
    // TODO: fix logic. Might need a new App-level function to set value.
    // TODO: sanitize better; force number input.
    if (e.target.value > 99) updateItemCount(item, 99);
    else if (e.target.value < 1) updateItemCount(item, 1);
    else updateItemCount(item, e.target.value);
  }

  return (
    <div className={styles.itemActions}>
      <input
        className={styles.count}
        id={`${item.title}-count`}
        type="number"
        min="0"
        max="99"
        onWheel={(e) => e.currentTarget.blur()}
        onChange={handleChange}
        value={itemCount}
      />
      <button className={styles.plus} onClick={handlePlus}>
        +
      </button>
      <button className={styles.minus} onClick={handleMinus}>
        -
      </button>
    </div>
  );
}

export default QuantityInput;
