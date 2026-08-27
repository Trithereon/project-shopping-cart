import { formatCurrency } from "../utils/utils";
import styles from "../styles/CartItem.module.css";
import QuantityInput from "./QuantityInput";
import { useContext } from "react";
import { AppContext } from "../App";

function CartItem({ item }) {
  const { itemsInCart } = useContext(AppContext);
  const cartIndex = itemsInCart.findIndex(
    (product) => product.title === item.title,
  );
  const itemCount = itemsInCart[cartIndex].count;
  const total = itemCount * item.price;

  return (
    <tr>
      <td className={styles.details}>
        <img className={styles.image} src={item.image} alt={item.title} />
        <h3 className={styles.title}>{item.title}</h3>
      </td>
      <td className={styles.countCell}>
        <QuantityInput item={item} />
      </td>
      <td className={styles.total}>{formatCurrency(total)}</td>
    </tr>
  );
}

export default CartItem;
