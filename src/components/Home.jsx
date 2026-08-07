import styles from "../styles/Home.module.css";
import ImgCarousel from "../components/ImgCarousel.jsx";
import mesclun from "../assets/img/shop/mesclun-mix.jpg";
import strawberries from "../assets/img/shop/strawberries.jpg";
import eggs from "../assets/img/shop/eggs.jpg";

function Home() {
  // Import folder of images
  const images = import.meta.glob("../assets/img/hero/*.{png,jpg}", {
    eager: true,
    import: "default",
  });

  /* 
  The images object at this stage is:
    {
      "../assets/img/hero/eggplant-closeup.jpg": "/src/assets/img/hero/eggplant-closeup.jpg",
      "../assets/img/hero/eggplant-table.jpg": "/src/assets/img/hero/eggplant-table.jpg",
      etc.
    }
  */

  return (
    <main>
      <div className={styles.hero}>
        <ImgCarousel images={images} />
        <div className={styles.benefitsContainer}>
          <div className={styles.benefit}>
            <h2>Weekly delivery</h2>
          </div>
          <div className={styles.benefit}>
            <h2>Artisanal quality</h2>
          </div>
          <div className={styles.benefit}>
            <h2>Responsible agriculture</h2>
          </div>
        </div>
      </div>
      <div className={styles.callToActionContainer}>
        <div className={styles.arrowRight}></div>
        <div className={styles.callToAction}>
          <div className={styles.ctaImgContainer}>
            <img src={strawberries} alt="strawberries" />
            <img src={eggs} alt="eggs" />
            <img src={mesclun} alt="mesclun salad mix" />
          </div>
          <div className={styles.ctaTextContainer}>
            <h3 className={styles.ctaText}>
              Visit our online shop to order fresh produce delivered to your
              door.
            </h3>
            <h3 className={styles.ctaText}>
              Deliveries are made every Monday from 5PM to 8PM.
            </h3>
          </div>
          <button
            className={styles.shopBtn}
            onClick={() => alert("Clicked Order Now!")}
          >
            Order Now
          </button>
        </div>
        <div className={styles.arrowLeft}></div>
      </div>
    </main>
  );
}

export default Home;
