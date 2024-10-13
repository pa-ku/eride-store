import Home from './pages/Home'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import Favorites from './pages/Favorites'
/* import CreateProduct from './pages/CreateProduct' */
import Layout from './pages/Layout'
import Register from './pages/Register'
import Login from './pages/Login'
import AllProducts from './pages/AllProducts'
import ProductShowcase from './pages/ProductShowcase'
import ProtectedRoute from './ProtectedRoute'
import AlreadyAuthRoutes from './AlreadyAuthRoutes'
import { AuthContextProvider } from './context/AuthContext'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index path="/" element={<Home />} />

              <Route path="/product">
                <Route path="scooters" element={<AllProducts />} />
                <Route path="id/:id" element={<ProductShowcase />} />
              </Route>

              <Route path="/user">
                <Route element={<AlreadyAuthRoutes />}>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </Route>

              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
