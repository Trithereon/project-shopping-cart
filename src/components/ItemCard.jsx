import styles from "../styles/ItemCard.module.css";
import { useState } from "react";
import StarRating from "./StarRating";

function ItemCard({ title, price, description, category, rating, imgSrc }) {
  const [quantity, setQuantity] = useState(0);

  function handlePlus() {
    if (quantity < 99) setQuantity((prev) => prev + 1);
    return;
  }

  function handleMinus() {
    if (quantity > 0) setQuantity((prev) => prev - 1);
    return;
  }

  function handleChange(e) {
    // TODO: sanitize better. Force number input.
    if (e.target.value > 99) setQuantity(99);
    else if (e.target.value < 0) setQuantity(0);
    else setQuantity(e.target.value);
  }

  function formatCurrency(number) {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(number);
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemImageContainer}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.itemContent}>
        <h3>{title}</h3>
        <span className={styles.price}>{formatCurrency(price)}</span>
        <span className={styles.description}>{description}</span>
        {/* TODO: make category clickable, to filter by category */}
        {/* <span className={styles.category}>Category: {category}</span> */}
        <StarRating rating={rating.rate} ratingCount={rating.count} />
      </div>
      <div className={styles.itemActions}>
        <input
          className={styles.quantity}
          id={`${title}-quantity`}
          type="number"
          min="0"
          max="99"
          onWheel={(e) => e.currentTarget.blur()}
          onChange={handleChange}
          value={quantity}
        />
        <button className={styles.plus} onClick={handlePlus}>
          +
        </button>
        <button className={styles.minus} onClick={handleMinus}>
          -
        </button>
        <button className={styles.addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default ItemCard;
