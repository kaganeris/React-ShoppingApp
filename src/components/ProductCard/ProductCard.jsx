import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({product}) => {

  return (
    <div className={styles.productCard}>
      <img
        className={styles.imgCard}
        src={product.images[0]}
      />
      <div className={styles.content}>
        <div>
          <p>Ürün Adı: {product.title}</p>
          <p>Açıklaması: {product.description}</p>
          <p>Fiyatı: {product.price}</p>
        </div>
        <div className={styles['content-btn']}>
          <button>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
