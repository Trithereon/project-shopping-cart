import styles from "../styles/Home.module.css";
import ImgCarousel from "../components/ImgCarousel.jsx";

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
      </div>
    </main>
  );
}

export default Home;
