import imgLogo from '../../assets/icons/logo.webp'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useAuth } from '../../context/AuthContext'

export default function Header() {
  const { isAuth } = useAuth()
  return (
    <>
      <header className="hidden h-14 w-full items-center justify-between bg-slate-800 md:flex xl:px-10">
        <Link className="w-max" title="Home" to={'/'}>
          <img className="size-36 object-contain" src={imgLogo} alt="" />
        </Link>
        <div className="flex items-center gap-4">
          <SearchBar></SearchBar>
          <Link
            className="rounded-lg px-3 py-1 text-white hover:bg-gray-700"
            to={'/product/scooters'}
          >
            Monopatines
          </Link>

          {isAuth && (
            <Link
              to={'/favorites'}
              className="rounded-lg p-2 text-white hover:bg-gray-700"
            >
              <svg
                className="size-5 text-white duration-200 peer-checked:text-primary-500"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </Link>
          )}

          <Link
            className="rounded-lg border px-3 py-1 text-white hover:bg-gray-700"
            to={'/user/login'}
          >
            Ingresar
          </Link>
          <Link
            className="rounded-lg bg-primary-600 px-3 py-1 text-white hover:bg-primary-500"
            to={'/user/register'}
          >
            Registrarse
          </Link>
        </div>
      </header>
    </>
  )
}
