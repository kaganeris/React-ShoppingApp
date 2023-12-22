import React, { useState } from "react";
import styles from "./BasketProductCard.module.css";

const BasketProductCard = ({ product, basketProducts, setBasketProducts, removeFromBasket }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setBasketProducts(
        basketProducts.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setBasketProducts(
      basketProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveFromBasket = () => {
    removeFromBasket(product.id);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imgDiv}>
        <img className={styles.imgCard} src={product.images[0]} alt={product.title} />
      </div>
      <div className={styles.content}>
        <p>Ürün Adı: {product.title}</p>
        <p>Açıklaması: {product.description}</p>
        <p>Fiyatı: {product.price}</p>
        <div className={styles.quantity}>
          <button className={styles.quantityBtn} onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button className={styles.quantityBtn} onClick={increaseQuantity}>+</button>
        </div>
        <button className={styles.removeBtn} onClick={handleRemoveFromBasket}>Sepetten Çıkar</button>
      </div>
    </div>
  );
};

export default BasketProductCard;
