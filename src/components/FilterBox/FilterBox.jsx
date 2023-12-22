import React, { useContext, useState, useEffect } from "react";
import styles from "./FilterBox.module.css";
import { ProjectContext } from "../../context/ProjectContext.jsx";
import { FaSearch, FaStar } from "react-icons/fa";

const FilterBox = () => {
  const {
    categories,
    products,
    setProducts,
    setFilteredProducts,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    priceFilteredProducts,
    setPriceFilteredProducts,
    star,
    setStar,
    setStarFilteredProducts
  } = useContext(ProjectContext);

  const [selectedPriceOption, setSelectedPriceOption] = useState(null);
  const [selectedStarOption, setSelectedStarOption] = useState(null);

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    clearPriceFilter();
    clearStarFilter();
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();
      setFilteredProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const clearFilteredProducts = () => {
    setSelectedCategory("");
    clearPriceFilter();
    clearStarFilter();
  };

  const handleRadioButtonRating = (minRate, rateValue) => {
    setStar(minRate);
    console.log(minRate);
    console.log(rateValue);
    setSelectedStarOption(rateValue);
    if (selectedCategory) {
      if (minPrice === 0 && maxPrice === 0) {
        const starCategoryFilteredProducts = filteredProducts
          .slice()
          .filter((product) => product.rating >= minRate);
          setStarFilteredProducts(starCategoryFilteredProducts)
      }
      else{
        const starCategoryAllProducts = priceFilteredProducts
        .slice()
        .filter((product) => product.rating >= minRate);
        setStarFilteredProducts(starCategoryAllProducts)
        console.log(starCategoryAllProducts);
      }
    } else {
      if (minPrice === 0 && maxPrice === 0) {
        const starAllProducts = products
          .slice()
          .filter((product) => product.rating >= minRate);
          setStarFilteredProducts(starAllProducts)
      }
      else{
        const starPriceAllProducts = priceFilteredProducts
        .slice()
        .filter((product) => product.rating >= minRate);
        setStarFilteredProducts(starPriceAllProducts)
      }
    }
  };

  const handleRadioButtonPrice = (minPrice, maxPrice, value) => {
    if(minPrice !== undefined){
      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
      setSelectedPriceOption(value);
      clearStarFilter()
    }
    if (selectedCategory) {
      const priceCategoryProducts = filteredProducts
        .slice()
        .filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      setPriceFilteredProducts(priceCategoryProducts);
    } else {
      const priceAllProducts = products
        .slice()
        .filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      setPriceFilteredProducts(priceAllProducts);
    }
  };

  const formatCategory = (category) => {
    return category
      .toLowerCase()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const clearPriceFilter = () => {
    setMinPrice(0);
    setMaxPrice(0);
    setSelectedPriceOption(null);
  };

  const clearStarFilter = () => {
    setStar(0)
    setSelectedStarOption(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterCategory}>
        <h4>Category</h4>
        <label>
          <input
            type="radio"
            name="category"
            value="All"
            checked={selectedCategory === ""}
            onChange={clearFilteredProducts}
          />
          All
        </label>
        {categories.map((category) => (
          <label key={category.id}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
            />
            {formatCategory(category)}
          </label>
        ))}
      </div>
      <div>
        <div className={styles.priceHead}>
          <h4>Price Range</h4>
          {selectedPriceOption ? <p onClick={clearPriceFilter}>Clear</p> : ""}
        </div>
        <div className={styles.priceSearch}>
          <input
            type="text"
            placeholder="Min Price"
            value={minPrice ? minPrice : ""}
          />
          <input
            type="text"
            placeholder="Max Price"
            value={maxPrice ? maxPrice : ""}
          />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className={styles.priceRadio}>
          <label>
            <input
              type="radio"
              name="price"
              checked={selectedPriceOption === "1-250"}
              onChange={() => handleRadioButtonPrice(1, 250, "1-250")}
            />
            1 - 250 TL
          </label>
          <label>
            <input
              type="radio"
              name="price"
              checked={selectedPriceOption === "250-500"}
              onChange={() => handleRadioButtonPrice(250, 500, "250-500")}
            />
            250 - 500 TL
          </label>
          <label>
            <input
              type="radio"
              name="price"
              checked={selectedPriceOption === "500-750"}
              onChange={() => handleRadioButtonPrice(500, 750, "500-750")}
            />
            500 - 750 TL
          </label>
          <label>
            <input
              type="radio"
              name="price"
              checked={selectedPriceOption === "750-1000"}
              onChange={() => handleRadioButtonPrice(750, 1000, "750-1000")}
            />
            750 - 1000 TL
          </label>
          <label>
            <input
              type="radio"
              name="price"
              checked={selectedPriceOption === "1000-1500"}
              onChange={() => handleRadioButtonPrice(1000, 1500, "1000-1500")}
            />
            1000 - 1500 TL
          </label>
        </div>
      </div>
      <div>
        <div className={styles.priceHead}>
          <h4>Rating</h4>
          {selectedStarOption ? <p onClick={clearStarFilter}>Clear</p> : ""}
        </div>
        <div className={styles.priceRadio}>
          <label>
            <input
              type="radio"
              name="rate"
              checked={selectedStarOption === "4"}
              onChange={() => handleRadioButtonRating(4.5, "4")}
            />
            <FaStar color="orange" /> 4 yıldız ve üzeri
          </label>
          <label>
            <input
              type="radio"
              name="rate"
              checked={selectedStarOption === "3"}
              onChange={() => handleRadioButtonRating(3, "3")}
            />
            <FaStar color="orange" /> 3 yıldız ve üzeri
          </label>
          <label>
            <input
              type="radio"
              name="rate"
              checked={selectedStarOption === "2"}
              onChange={() => handleRadioButtonRating(2, "2")}
            />
            <FaStar color="orange" /> 2 yıldız ve üzeri
          </label>
          <label>
            <input
              type="radio"
              name="rate"
              checked={selectedStarOption === "1"}
              onChange={() => handleRadioButtonRating(1, "1")}
            />
            <FaStar color="orange" /> 1 yıldız ve üzeri
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
