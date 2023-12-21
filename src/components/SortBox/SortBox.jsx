import React from 'react'
import styles from './SortBox.module.css'

const SortBox = () => {
  return (
    <div className={styles.container}>
        <div>
            <p>Sıralama Kutusu</p>
            <select>
                <option>Fiyata göre azalan</option>
                <option>Fiyata göre artan</option>
            </select>
        </div>
    </div>
  )
}

export default SortBox