import "./styles/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState, createContext } from "react";

export const CartContext = createContext({
  itemsInCart: [],
  addToCart: () => {},
});

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const addToCart = (product) => {
    /* - if user clicks addToCart, check for presence of item in itemsInCart, 
   - if item already exists, add the new value to the quantity property of the item, 
   - else add the full item object to itemsInCart.
   Note: item will be in format   
  {
    title: "Eggplant",
    price: 3.25,
    image: "https://trithereon.github.io/fake-api/img/eggplant.jpg",
    count: 4,
  } 
*/
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

  return (
    <CartContext value={{ itemsInCart, addToCart }}>
      <Header />
      <Outlet />
      <Footer />
    </CartContext>
  );
}

export default App;
