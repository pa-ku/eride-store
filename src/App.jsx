import Home from './pages/Home'
import './css/global.css'
import './css/animations.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Favorites from './pages/Favorites'
import Layout from './layout/Layout'
import Register from './pages/SignUp'
import Login from './pages/SignIn'
import AllProducts from './pages/ProductList'
import ProductShowcase from './pages/Product'
import Profile from './pages/Profile'
import Account from './components/NoAuthMessage'
import ProtectedRoutes from './layout/ProtectedRoute'
import UserAlreadyAuth from './layout/UserAlreadyAuth'

const LazyAbout = React.lazy(() => import('#pages/About'))

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
                <Route element={<UserAlreadyAuth />}>
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="account" element={<Account />} />
                </Route>
                <Route element={<ProtectedRoutes />}>
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </Route>
              <Route
                path="about"
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyAbout />
                  </React.Suspense>
                }
              />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
