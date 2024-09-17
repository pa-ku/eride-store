import Home from './pages/Home'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import ProductCategory from './pages/AllProducts'
import ProductSection from './pages/ProductShowcase'
import Favorites from './pages/Favorites'
import CreateProduct from './pages/CreateProduct'
import Layout from './pages/layouts/Layout'
import ScrollToTop from './components/ScrollToTop'
import Register from './pages/Register'
import Login from './pages/Login'
import AllProducts from './pages/AllProducts'
import ProductShowcase from './pages/ProductShowcase'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<Home />} />
            <Route path='/product'>
              <Route path='monopatines/' element={<AllProducts />} />
              <Route path='id/:id' element={<ProductShowcase />} />
            </Route>

            <Route path='/user'>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
