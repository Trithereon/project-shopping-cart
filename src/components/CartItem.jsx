import { formatCurrency } from "../utils/utils";
import styles from "../styles/CartItem.module.css";
import QuantityInput from "./QuantityInput";

function CartItem({ item }) {
  const total = Number(item.count) * Number(item.price);

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
