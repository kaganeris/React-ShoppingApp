import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import SideBar from './components/SideBar/SideBar';
import styles from './App.module.css'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        {/* <SideBar/> */}
        <NavBar />
        <br/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
