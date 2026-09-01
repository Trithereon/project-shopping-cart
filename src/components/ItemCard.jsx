import styles from "../styles/ItemCard.module.css";
import { useState, useContext } from "react";
import StarRating from "./StarRating";
import { AppContext } from "../App";
import { formatCurrency } from "../utils/utils.jsx";

function ItemCard({
  title,
  price,
  description,
  category,
  rating,
  imgSrc,
  isAlerted,
  setIsAlerted,
}) {
  const [count, setCount] = useState(0);
  const { itemsInCart, addToCart, setLatestItem } = useContext(AppContext);

  function handlePlus() {
    if (count < 99) setCount((prev) => prev + 1);
  }

  function handleMinus() {
    if (count > 0) setCount((prev) => prev - 1);
  }

  function handleChange(e) {
    // TODO: sanitize better; force number input.
    if (e.target.value > 99) setCount(99);
    else if (e.target.value < 0) setCount(0);
    else setCount(e.target.value);
  }

  function handleAddToCart() {
    // 1. addToCart()
    // 2. setIsAlerted(true)
    // 3. disable addToCart button (4. does it)
    // 4. set value of count input back to 0
    const product = addToCart({
      title: title,
      price: price,
      image: imgSrc,
      count: count,
    });
    setLatestItem(product);
    setIsAlerted(true);
    setCount(0);
  }

  return (
    <article className={styles.itemCard} data-testid="item-card">
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
          className={styles.count}
          id={`${title}-count`}
          type="number"
          min="0"
          max="99"
          onWheel={(e) => e.currentTarget.blur()}
          onChange={handleChange}
          value={count}
        />
        <button className={styles.plus} onClick={handlePlus}>
          +
        </button>
        <button className={styles.minus} onClick={handleMinus}>
          -
        </button>
        <button
          className={styles.addToCart}
          disabled={count === 0 ? true : false}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ItemCard;
