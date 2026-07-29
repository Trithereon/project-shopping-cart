import styles from "../styles/header.module.css";
import logo from "../assets/img/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.headerTitle}>
        <h1>Ressources de la Vallée</h1>
        <span>Sainte-Anne-de-la-Rochelle, QC</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.headerActions}>
        <ul>
          <li>
            <button onClick={() => alert("Clicked Home")}>Home</button>
          </li>
          <li>
            <button onClick={() => alert("Clicked Shop")}>Shop</button>
          </li>
          <li>
            <button onClick={() => alert("Clicked Cart")}>Cart</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
