import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import { ProjectContext } from "../../context/ProjectContext";
import BasketProductCard from "../BasketProductCard/BasketProductCard";

const SideBar = () => {
  const { isCartOpen, basketProducts, setBasketProducts } = useContext(ProjectContext);

  const totalPrice = basketProducts.reduce((total, product) => total + product.price, 0);

  const removeFromBasket = (productId) => {
    const updatedBasket = basketProducts.filter((item) => item.id !== productId);
    setBasketProducts(updatedBasket);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedBasket = basketProducts.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setBasketProducts(updatedBasket);
  };

  return (
    <div className={`${styles.container} ${isCartOpen ? styles.active : ""}`}>
      <h3>Sepet</h3>
      <div className={styles.scrollableContent}>
        {basketProducts.map((product) => (
          <BasketProductCard
            key={product.id}
            product={product}
            removeFromBasket={removeFromBasket}
            updateQuantity={updateQuantity}
            basketProducts={basketProducts}
            setBasketProducts={setBasketProducts}
          />
        ))}
      </div>
      <div className={styles.content}>
        <p>Toplam Tutar: {totalPrice}</p>
        <button>Satın Al</button>
      </div>
    </div>
  );
};

export default SideBar;
