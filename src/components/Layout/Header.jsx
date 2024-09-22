
import imgLogo from '../../assets/icons/logo.webp'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'



export default function Header() {
  return (
    <>
      <header className="hidden h-14 w-full items-center justify-between bg-slate-800 md:flex xl:px-10">
        <Link className="w-max" title="Home" to={'/'}>
          <img className='size-36 object-contain' src={imgLogo} alt="" />
        </Link>
        <div className="flex items-center gap-4">
          <SearchBar></SearchBar>
          <Link
            className="rounded-lg px-3 py-1 text-white hover:bg-gray-700"
            to={'/product/scooters'}
          >
            Monopatines
          </Link>

          {/* <Link className='text-white p-1 rounded-full hover:bg-gray-700'>
            <FavIcon></FavIcon>
          </Link> */}
          <Link
            className="rounded-lg border px-3 py-1 text-white hover:border-primary-500 hover:bg-gray-700 hover:text-primary-500"
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
