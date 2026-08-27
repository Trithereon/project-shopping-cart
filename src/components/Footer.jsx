import styles from "../styles/Footer.module.css";
import quebecFlag from "../assets/img/flag-quebec.svg";
import githubBlack from "../assets/img/GitHub_Invertocat_Black.svg";
import FooterLinkList from "./FooterLinkList";
import { aboutUsLinks, socialLinks } from "../assets/data/footer-data";
import { useState } from "react";

function Footer() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    newsSignUp({ isSignedUp, setIsSignedUp });
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <FooterLinkList listData={aboutUsLinks} />
        <FooterLinkList listData={socialLinks} />
        <div className={styles.newsletter}>
          <h2>Watch us grow</h2>
          <label htmlFor="newsEmail">
            Sign up to receive news from the farm in a single click
          </label>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.newsEmail}
              id="newsEmail"
              name="newsEmail"
              type="email"
              placeholder="Enter your email"
              required
              disabled={isSignedUp ? true : false}
            />
            <button
              type="submit"
              className={styles.newsSignUpBtn}
              disabled={isSignedUp ? true : false}
            >
              {isSignedUp ? "Signed up! ✔️" : "Sign up"}
            </button>
          </form>
        </div>
      </div>

      <div className={styles.lineDivider}></div>

      <div className={styles.copyright}>
        <div>2026 © Ressources de la Vallée - Site web conçu au</div>
        <div className={styles.country}>
          <img className={styles.flag} src={quebecFlag} alt="flag of Québec" />
          Québec
        </div>

        <div className={styles.githubLink}>
          par
          <a className={styles.githubLink} href="https://github.com/Trithereon">
            Eliott Bourassa{" "}
            <img
              className={styles.githubLogo}
              src={githubBlack}
              alt="Github logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

function newsSignUp({ isSignedUp, setIsSignedUp }) {
  if (!isSignedUp) {
    setIsSignedUp(true);
  }
  /* Real sign up logic would go here. */
}

export default Footer;
