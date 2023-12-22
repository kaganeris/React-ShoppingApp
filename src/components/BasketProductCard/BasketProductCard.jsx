import React from "react";
import styles from "./BasketProductCard.module.css";

const BasketProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imgDiv}>
        <img className={styles.imgCard} src={product.images[0]} />
      </div>
      <div className={styles.content}>
        <p>Ürün Adı: {product.title}</p>
        <p>Açıklaması: {product.description}</p>
        <p>Fiyatı: {product.price}</p>
      </div>
    </div>
  );
};

export default BasketProductCard;
