import styles from "../styles/QuantityInput.module.css";
import { useContext } from "react";
import { CartContext } from "../App";
import trash from "../assets/img/cart/trash.svg";
import { ShopContext } from "./Shop";

function QuantityInput({ item }) {
  const { itemsInCart, updateItemCount, deleteFromCart } =
    useContext(CartContext);
  const { isAlerted, setIsAlerted } = useContext(ShopContext);
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
    // TODO: sanitize better; force number input.
    if (e.target.value > 99) updateItemCount(item, 99);
    else if (e.target.value < 1) updateItemCount(item, 1);
    else updateItemCount(item, e.target.value);
  }

  function handleDelete() {
    setIsAlerted(false);
    deleteFromCart(item);
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
      <button onClick={handleDelete} className={styles.deleteBtn}>
        <img className={styles.deleteImg} src={trash} alt="delete" />
      </button>
    </div>
  );
}

export default QuantityInput;
