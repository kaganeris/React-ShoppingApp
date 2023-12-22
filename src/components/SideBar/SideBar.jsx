import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import { ProjectContext } from "../../context/ProjectContext";
import BasketProductCard from "../BasketProductCard/BasketProductCard";

const SideBar = () => {
  const { isCartOpen, basketProducts } = useContext(ProjectContext);

  const basketProductPrices = basketProducts.map((product) => product.price)

  const totalPrice = basketProductPrices.reduce((total,current) => total + current,0)
  return (
    <div
      className={`${styles["container"]} ${isCartOpen ? styles["active"] : ""}`}
    >
      <h3>Sepet</h3>
      <div className={styles.scrollableContent}>
        {basketProducts.map((product) => (
          <BasketProductCard product={product} />
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
