import Header from "./components/Header";
import HeaderActions from "./components/HeaderActions";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState, createContext } from "react";

export const AppContext = createContext({
  itemsInCart: [],
  addToCart: () => {},
  updateItemCount: () => {},
  deleteFromCart: () => {},
});

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [latestItem, setLatestItem] = useState(null);

  const addToCart = (product) => {
    const cartIndex = itemsInCart.findIndex(
      (item) => item.title === product.title,
    ); // Returns -1 if not found.
    // If not found, add new item to cart.
    if (cartIndex === -1) setItemsInCart([...itemsInCart, product]);
    else
      // If item already exists in cart, only add to its count.
      setItemsInCart((prevItems) =>
        prevItems.map((item, index) =>
          index === cartIndex
            ? { ...item, count: item.count + product.count }
            : item,
        ),
      );
    return product;
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
    <AppContext
      value={{
        itemsInCart,
        addToCart,
        updateItemCount,
        deleteFromCart,
        latestItem,
        setLatestItem,
      }}
    >
      <Header />
      <HeaderActions />
      <Outlet />
      <Footer />
    </AppContext>
  );
}

export default App;
