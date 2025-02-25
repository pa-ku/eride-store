import { Outlet } from 'react-router'
import Footer from '#layout/components/Footer'
import Header from '#layout/components/Header'
import HeaderMobile from '#layout/components/HeaderMobile'

export default function Layout() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <div className="pt-14 md:p-0">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
