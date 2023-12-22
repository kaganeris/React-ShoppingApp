import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
import { ProjectContext } from "../../context/ProjectContext";

const Products = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.length === 0 ? (
        <div className={styles.container}>
          <h1 className={styles.title}>Üzgünüz, Aradığınız Ürünler Bulunamadı</h1>
          <p className={styles.text}>
            Aradığınız ürünler şu anda mevcut değil. Lütfen filtrelerinizi değiştirin.
          </p>
          {/* Buraya istediğiniz tasarımı ekleyebilirsiniz */}
        </div>
      ) : (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      )}
    </div>
  );
};

export default Products;
