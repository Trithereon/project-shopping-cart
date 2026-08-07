import { useEffect, useState } from "react";
import styles from "../styles/Shop.module.css";
import ItemCard from "./ItemCard";

function Shop() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(
      "https://trithereon.github.io/fake-api/v1/shopping-cart-products.json",
    )
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div>
      <h2>Shop</h2>
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
  );
}

export default Shop;
