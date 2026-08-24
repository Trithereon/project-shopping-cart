import { useEffect, useState } from "react";
import styles from "../styles/Shop.module.css";
import ItemCard from "./ItemCard";
import { Link } from "react-router";

function Shop({ itemsInCart, setItemsInCart }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(
      "https://trithereon.github.io/fake-api/v1/shopping-cart-products.json",
    )
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <main>
      <h2 className={styles.topBanner}>Free delivery on orders over 35$</h2>

      <div className={styles.itemCardContainer}>
        {items &&
          items.map((item) => {
            return (
              <ItemCard
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                rating={item.rating}
                imgSrc={item.image}
              />
            );
          })}
      </div>
      <Link className={styles.goToCartBtn} to="/cart">
        GO TO CART
      </Link>
    </main>
  );
}

export default Shop;
