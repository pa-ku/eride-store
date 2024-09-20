import styled from 'styled-components'
import imgLogo from '../../assets/icons/logo.webp'
import { device } from '../../responsive'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Logo = styled.img`
  width: 150px;

  @media ${device.mobile} {
    width: 130px;
  }
`

export default function HeaderMobile() {
  return (
    <>
      <header className='px-2  z-50 md:hidden flex h-14 items-center bg-slate-800 xl:px-10 justify-between w-full'>
        <Link className='w-max' title='Home' to={'/'}></Link>
        <div className='flex gap-4 items-center '>
          <Link className='text-white size-8 flex items-center justify-centert-ce p-1 hover:bg-gray-700 rounded-lg'>
            <svg
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='#fff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
              <path d='M21 21l-6 -6' />
            </svg>
          </Link>
          <Link
            className='text-white size-8 flex items-center justify-centert-ce  hover:bg-gray-700 rounded-lg'
            to={'/product/scooters'}
          >
            <svg
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#fff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
              <path d='M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
              <path d='M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1' />
            </svg>
          </Link>

          {/* <Link className='text-white p-1 rounded-full hover:bg-gray-700'>
            <FavIcon></FavIcon>
          </Link> */}
          <button className='text-white size-8 flex items-center justify-centert-ce  hover:bg-gray-700 rounded-lg'>
            <svg
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#fff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 6l16 0' />
              <path d='M4 12l16 0' />
              <path d='M4 18l16 0' />
            </svg>
          </button>
          {/* <Link
            className='text-white px-2 py-0.5 hover:bg-gray-700 border hover:text-primary-500 hover:border-primary-500 rounded-lg'
            to={'/user/login'}
          >
            Ingresar
          </Link>
          <Link
            className='text-white px-2 py-0.5 bg-primary-600 hover:bg-primary-500 rounded-lg'
            to={'/user/register'}
          >
            Registrarse
          </Link> */}
        </div>
      </header>
    </>
  )
}
