import React, { useContext, useState, useRef, useEffect } from "react";
import styles from "./ProductCard.module.css";
import { ProjectContext } from "../../context/ProjectContext";
import { FaStar } from "react-icons/fa"; // React Icons'tan FaStar ikonunu içeri aktar

const ProductCard = ({ product }) => {
  const { setBasketProducts, basketProducts } = useContext(ProjectContext);
  const progresTimerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filled, setFilled] = useState(0);

  const handleAddBasket = () => {
    setBasketProducts((prev) => [...prev, product]);
  };

  const handleHover = (hover) => {
    setIsHovered(hover);
  };

  useEffect(() => {
    if (progresTimerRef.current) {
      clearTimeout(progresTimerRef.current);
    }
    if (isHovered === false) {
      if (filled === 100) {
        setFilled(0);
        const newIndex =
          currentIndex === product.images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      } else {
        progresTimerRef.current = setTimeout(() => {
          setFilled((prev) => prev + 1);
        }, (1 * 800) / 10);
      }
    }
  }, [currentIndex, filled, isHovered, product.images.length]);

  return (
    <div className={styles.productCard}>
      <img
        className={styles.imgCard}
        src={product.images[currentIndex]}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
      <div className={styles.progressBar}>
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#55828b",
            transition: "width 0.05s",
          }}
        ></div>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>{product.title}</p>
          <p>{product.description}</p>
          <p>{product.price} $</p>
          <p>
            <FaStar color="#FFD700" /> {product.rating}
          </p>
        </div>
        <div className={styles["content-btn"]}>
          <button onClick={handleAddBasket}>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
