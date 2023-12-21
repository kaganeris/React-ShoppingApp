import React from 'react'
import styles from './FilterBox.module.css'

const FilterBox = () => {
  return (
    <div className={styles.container}>
        <h4>Filtre</h4>
        <div>
            <ul>
                <li>Fiyata göre</li>
                <li>Boyuta göre</li>
                <li>Renge göre</li>
            </ul>
        </div>
    </div>
  )
}

export default FilterBox