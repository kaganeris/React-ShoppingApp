import React from "react";
import styles from "./NavBar.module.css";
import { SlBasket } from "react-icons/sl";

const NavBar = () => {
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
        <SlBasket size={30}/>
        <span>4</span>
        </div>
    </div>
  );
};

export default NavBar;
