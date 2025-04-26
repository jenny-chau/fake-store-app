import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList'
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
     <NavBar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:itemId" element={<ProductDetails />} />
      <Route path="/add-product" element={<AddProduct />} />
      {/* Not found page placed at the end to catch any paths that don't route to the above paths */}
      <Route path="*" element={<NotFound />} /> 
     </Routes>
     <Footer />
    </>
  )
}

export default App
