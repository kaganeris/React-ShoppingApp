import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { SlBasket } from "react-icons/sl";
import { ProjectContext } from "../../context/ProjectContext";

const NavBar = () => {

  const {isCartOpen,setIsCartOpen,basketProducts} = useContext(ProjectContext)

  const handleBasket = () => {
    if(isCartOpen){
      setIsCartOpen(false)
    }
    else{
      setIsCartOpen(true)
    }
  }

  return (
    <div className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
        <div className={styles['basket-container']}>
        <SlBasket onClick={handleBasket} size={30}/>
        <span>{basketProducts.length}</span>
        </div>
    </div>
  );
};

export default NavBar;
