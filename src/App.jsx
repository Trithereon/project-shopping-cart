import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState, createContext } from "react";

export const CartContext = createContext({
  itemsInCart: [],
  addToCart: () => {},
  updateItemCount: () => {},
  deleteFromCart: () => {},
});

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const addToCart = (product) => {
    // First check whether item already exists in cart, if so, add to its count.
    const cartIndex = itemsInCart.findIndex(
      (item) => item.title === product.title,
    ); // Returns -1 if not found.
    if (cartIndex === -1) setItemsInCart([...itemsInCart, product]);
    else
      setItemsInCart((prevItems) =>
        prevItems.map((item, index) =>
          index === cartIndex
            ? { ...item, count: item.count + product.count }
            : item,
        ),
      );
  };

  const updateItemCount = (product, newCount) => {
    const cartIndex = itemsInCart.findIndex(
      (item) => item.title === product.title,
    );
    setItemsInCart((prevItems) =>
      prevItems.map((item, index) =>
        index === cartIndex ? { ...item, count: newCount } : item,
      ),
    );
  };

  const deleteFromCart = (product) => {
    const cartIndex = itemsInCart.findIndex(
      (item) => item.title === product.title,
    );
    setItemsInCart((prevItems) =>
      prevItems.filter((_, index) => (index === cartIndex ? false : true)),
    );
  };

  return (
    <CartContext
      value={{ itemsInCart, addToCart, updateItemCount, deleteFromCart }}
    >
      <Header />
      <Outlet />
      <Footer />
    </CartContext>
  );
}

export default App;
