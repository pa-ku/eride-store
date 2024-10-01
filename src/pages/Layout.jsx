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
      <div className='pt-14 md:p-0'>

      <Outlet />
      </div>
      <Footer />
    </>
  )
}
