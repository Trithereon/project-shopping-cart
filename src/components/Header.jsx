import styles from "../styles/Header.module.css";
import logo from "../assets/img/logo-bare.png";

function Header({
  farmName = "Ressources de la Vallée",
  farmAddress = "Sainte-Anne-de-la-Rochelle, QC",
  logoSrc = logo,
}) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img src={logoSrc} alt="logo" />
      </div>
      <div className={styles.headerTitle}>
        <h1>{farmName}</h1>
        <address>{farmAddress}</address>
      </div>
    </header>
  );
}

export default Header;
