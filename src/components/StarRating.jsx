import { useId } from "react";
import styles from "../styles/StarRating.module.css";

function StarRating({ rating, ratingCount, maxStars = 5, size = 20 }) {
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    const fillPercent = Math.min(Math.max(rating - i, 0), 1) * 100;
    stars.push(
      <Star key={`${i}-star`} fillPercent={fillPercent} size={size} />,
    );
  }

  return (
    <div className={styles.starRating}>
      {stars}
      <span className={styles.ratingCount}>{`(${ratingCount})`}</span>
    </div>
  );
}

function Star({ fillPercent, size }) {
  const id = useId(); // Unique id per star.

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <clipPath id={`clip-${id}`}>
          <rect x="0" y="0" width={`${fillPercent}%`} height="100%" />
        </clipPath>
      </defs>

      {/* Empty star. */}
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="none"
        stroke="#d1d5db"
        strokeWidth="1"
      />

      {/* Filled star, clipped to the percentage. */}
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="#facc15"
        clipPath={`url(#clip-${id})`}
      />
    </svg>
  );
}

export default StarRating;
