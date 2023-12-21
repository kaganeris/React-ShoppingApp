import React from 'react'
import FilterBox from '../../components/FilterBox/FilterBox'
import SortBox from '../../components/SortBox/SortBox'
import Products from '../../components/Products/Products'
import styles from './ProductsPage.module.css'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <FilterBox/>
      <div>
        <SortBox/>
        <Products/>
      </div>
    </div>
  )
}

export default ProductsPage