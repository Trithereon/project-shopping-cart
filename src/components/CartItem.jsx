import { formatCurrency } from "../utils/utils";
import styles from "../styles/CartItem.module.css";

function CartItem({ item }) {
  const total = Number(item.count) * Number(item.price);

  return (
    <tr>
      <td className={styles.details}>
        <img src={item.image} alt={item.title} width="150px" height="150px" />
        <h3>{item.title}</h3>
      </td>
      <td>{item.count}</td>
      <td>{formatCurrency(total)}</td>
    </tr>
  );
}

export default CartItem;
