import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import HeaderMobile from '../components/Layout/HeaderMobile'

export default function Layout() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Outlet />
      <Footer />
    </>
  )
}
