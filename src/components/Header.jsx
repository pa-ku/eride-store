import styled from 'styled-components'
import imgLogo from '../assets/icons/logo.webp'
import FavIcon from '@mui/icons-material/FavoriteBorder'
import { device } from '../responsive'
import LinkButton from './ui/LinkButton'
import { Link } from 'react-router-dom'

const Logo = styled.img`
  width: 150px;

  @media ${device.mobile} {
    width: 130px;
  }
`

export default function Header() {
  return (
    <>
      <header className='flex h-14 bg-slate-800 xl:px-10 justify-between w-full'>
        <Link className='w-max' title='Home' to={'/'}>
          <Logo src={imgLogo} alt='' />
        </Link>
        <div className='flex gap-4 items-center '>
          <Link
            className='text-white px-3 py-1 hover:bg-gray-700 rounded-lg'
            to={'/product/scooters'}
          >
            Monopatines
          </Link>

          <Link className='text-white p-1 rounded-full hover:bg-gray-700'>
            <FavIcon></FavIcon>
          </Link>
          <Link
            className='text-white px-3 py-1 hover:bg-gray-700 border hover:text-primary-500 hover:border-primary-500 rounded-lg'
            to={'/user/login'}
          >
            Ingresar
          </Link>
          <Link
            className='text-white px-3 py-1 bg-primary-600 hover:bg-primary-500 rounded-lg'
            to={'/user/register'}
          >
            Registrarse
          </Link>
        </div>
      </header>
    </>
  )
}

export function SearchBar() {
  return (
    <>
      <div className='relative flex h-max w-max items-center justify-start'>
        <input
          type='text'
          className='text-red peer rounded-xl border-[1px] 
    border-transparent bg-gray-800 px-3 py-2 caret-primary
    outline-none focus-visible:border-primary'
          placeholder=' '
        />
        <p
          className='pointer-events-none absolute -translate-y-8 px-3 
  font-bold text-slate-300 duration-300 peer-placeholder-shown:translate-y-0
   peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-400 
   peer-focus:-translate-y-8 peer-focus:font-bold peer-focus:text-slate-300'
        >
          Email
        </p>
      </div>
    </>
  )
}
