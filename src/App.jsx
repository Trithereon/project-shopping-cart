import "./styles/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <>
      <Header itemsInCart={itemsInCart} />
      <Outlet itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
      <Footer />
    </>
  );
}

export default App;
