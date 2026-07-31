import styles from "../styles/ImgCarousel.module.css";
import { useState } from "react";

function ImgCarousel({ images }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const arrLength = Object.values(images).length;

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

  return (
    <div className={styles.imgCarousel}>
      <button className={styles.prev} onClick={handlePrev}>
        &lt;
      </button>

      {Object.values(images).map((src, index) => {
        // Takes src, splits into an array, keeps only the last value, e.g. "hens.jpg"
        const filename = src.split("/").pop();
        return (
          <div
            key={src}
            className={`${styles.slide} ${index === selectedImg ? styles.visible : ""}`}
          >
            <img src={src} alt={filename} className={styles.slideContent} />
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
