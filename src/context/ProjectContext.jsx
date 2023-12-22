import { useState, useEffect } from "react";
import { createContext } from "react";

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [basketProducts, setBasketProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFilteredProducts,setPriceFilteredProducts] = useState([])
  const [starFilteredProducts,setStarFilteredProducts] = useState([])
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [star,setStar] = useState(null)

  const getAllProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategories = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { 
    getAllProducts();
    console.log("useefect",products);
    getAllCategories();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        basketProducts,
        setBasketProducts,
        categories,
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        selectedCategory,
        setSelectedCategory,
        priceFilteredProducts,
        setPriceFilteredProducts,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        starFilteredProducts,
        setStarFilteredProducts,
        star,
        setStar
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
