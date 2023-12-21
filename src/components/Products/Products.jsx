import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css"

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    })();
  }, []);

  return (
    <div className={styles.productList}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      }
      )}
    </div>
  );
};

export default Products;
