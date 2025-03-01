import imgLogo from '#assets/icons/logo.webp'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useAuth } from '#context/AuthContext'
import LoggedMenu from './LoggedMenu'
import { useRef } from 'react'
import { useOutsideClick } from '#hooks/useOutsideClick'
import { Heart, User } from 'lucide-react'

export default function Header () {
  const { isAuth } = useAuth()
  const menuRef = useRef()
  const { isOpen: menuIsOpen, setIsOpen } = useOutsideClick(menuRef)

  return (
    <>
      <header className='hidden h-14 w-full items-center justify-between bg-slate-800 md:flex md:px-10'>
        <Link className='w-max' title='Home' to='/'>
          <img className='size-36 object-contain' src={imgLogo} alt='' />
        </Link>
        <nav className='z-50 flex items-center justify-end gap-5'>
          <SearchBar />
          <Link
            className='rounded-lg px-3 py-1 text-white hover:bg-gray-700'
            to='/product/scooters'
          >
            Monopatines
          </Link>

          {isAuth && (
            <>
              <Link
                to='user/favorites'
                className='flex items-center justify-center gap-1 rounded-lg p-2 text-white hover:bg-gray-700'
              >
                <Heart fill='white' size={15} />
                Favoritos
              </Link>
              <span className='relative'>
                <button
                  onClick={() => setIsOpen(true)}
                  role='button open profile'
                  data-test-id='btn-open-profile'
                  className='p-1 rounded-full flex items-center justify-center bg-gray-200'
                >
                  <User />
                </button>
                {menuIsOpen && (
                  <LoggedMenu
                    menuRef={menuRef}
                    setIsOpen={setIsOpen}
                  />
                )}
              </span>
            </>
          )}

          {!isAuth && (
            <>
              <Link
                className='rounded-lg border px-3 py-1 text-white hover:bg-gray-700'
                to='/user/login'
                data-test-id='btn-login'
              >
                Ingresar
              </Link>
              <Link
                className='rounded-lg bg-primary-600 px-3 py-1 text-white hover:bg-primary-500'
                to='/user/register'
              >
                Registrarse
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  )
}
