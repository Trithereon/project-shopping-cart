import { useState } from "react";
import "./styles/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="bigDiv"></div>
      <Footer />
    </>
  );
}

export default App;
