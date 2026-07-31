import styles from "../styles/ImgCarousel.module.css";
import { useEffect, useState } from "react";

function ImgCarousel({ images }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const arrLength = Object.values(images).length;
  const SLIDE_DURATION = 4000; // Sync with transform timing in css module.

  function handlePrev() {
    setSelectedImg((prevState) => {
      if (prevState === 0) return arrLength - 1;
      else return prevState - 1;
    });
  }

  function handleNext() {
    setSelectedImg((prevState) => {
      if (prevState === arrLength - 1) return 0;
      else return prevState + 1;
    });
  }

  // Autoplay. Timer resets every time selectedImg changes.
  useEffect(() => {
    const timer = setInterval(handleNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [selectedImg]);

  return (
    <div className={styles.imgCarousel}>
      <button className={styles.prev} onClick={handlePrev}>
        &lt;
      </button>

      {Object.values(images).map((src, index) => {
        // Takes src, splits into an array, keeps only the last value, e.g. "hens.jpg"
        const filename = src.split("/").pop();
        return (
          <div key={src} className={styles.slide}>
            <img
              src={src}
              alt={filename}
              className={`${styles.slideContent} ${index === selectedImg ? styles.visible : ""}`}
            />
          </div>
        );
      })}

      <button className={styles.next} onClick={handleNext}>
        &gt;
      </button>
      <div className={styles.navDotContainer}>
        {Object.values(images).map((src, index) => {
          return (
            <button
              key={src + "dot"}
              className={`${styles.navDot} ${index === selectedImg ? styles.selected : ""}`}
              onClick={() => setSelectedImg(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ImgCarousel;
