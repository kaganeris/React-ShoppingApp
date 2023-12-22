import React, { useContext, useEffect, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SortBox from "../../components/SortBox/SortBox";
import Products from "../../components/Products/Products";
import styles from "./ProductsPage.module.css";
import { ProjectContext } from "../../context/ProjectContext";

const ProductsPage = () => {
  const [productPageList, setProductPageList] = useState([]);

  const {
    filteredProducts,
    products,
    selectedCategory,
    priceFilteredProducts,
    maxPrice,
    minPrice,
    starFilteredProducts,
    star,
  } = useContext(ProjectContext);

  useEffect(() => {
    if (selectedCategory) {
      if (maxPrice === 0 && minPrice === 0) {
        if (star) {
          setProductPageList(starFilteredProducts);
        } else {
          setProductPageList(filteredProducts);
        }
      } else {
        if (star) {
          setProductPageList(starFilteredProducts);
        } else {
          setProductPageList(priceFilteredProducts);
        }
      }
    } else {
      if (maxPrice === 0 && minPrice === 0) {
        if (star) {
          setProductPageList(starFilteredProducts);
        } else {
          setProductPageList(products);
        }
      } else {
        if (star) {
          setProductPageList(starFilteredProducts);
        } else {
          setProductPageList(priceFilteredProducts);
        }
      }
    }
  }, [
    selectedCategory,
    products,
    filteredProducts,
    priceFilteredProducts,
    maxPrice,
    minPrice,
    star,
    starFilteredProducts,
  ]);

  return (
    <div className={styles.container}>
      <FilterBox />
      <div>
        <SortBox />
        <Products products={productPageList} />
      </div>
    </div>
  );
};

export default ProductsPage;
