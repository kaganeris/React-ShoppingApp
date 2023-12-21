import React from 'react'
import styles from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={styles.container}>
        <h3>Sepet</h3>
        <p>Toplam Tutar</p>
        <button>Satın Al</button>
    </div>
  )
}

export default SideBar