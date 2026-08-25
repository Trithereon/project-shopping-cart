import { useEffect, useState, createContext } from "react";
import styles from "../styles/Shop.module.css";
import ItemCard from "./ItemCard";
import { Link } from "react-router";
import CartAlert from "../components/CartAlert";

export const ShopContext = createContext({
  isAlerted: false,
  setIsAlerted: () => {},
});

function Shop() {
  const [items, setItems] = useState(null);
  const [isAlerted, setIsAlerted] = useState(false);

  useEffect(() => {
    fetch(
      "https://trithereon.github.io/fake-api/v1/shopping-cart-products.json",
    )
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <ShopContext value={{ isAlerted, setIsAlerted }}>
      <main>
        {isAlerted ? <CartAlert /> : null}
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
                  isAlerted={isAlerted}
                  setIsAlerted={setIsAlerted}
                />
              );
            })}
        </div>
        <Link className={styles.goToCartBtn} to="/cart">
          GO TO CART
        </Link>
      </main>
    </ShopContext>
  );
}

export default Shop;
