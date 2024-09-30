import styled from 'styled-components'
import imgLogo from '/favicon.webp'
import { device } from '../../responsive'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useState } from 'react'

const Logo = styled.img`
  width: 150px;

  @media ${device.mobile} {
    width: 130px;
  }
`

export default function HeaderMobile() {
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <header className="fixed z-50 flex h-14 w-full items-center justify-between bg-slate-800 px-2 md:hidden xl:px-10">
        <Link className="w-max" title="Home" to={'/'}>
          <img className="size-10 object-contain" src={imgLogo} alt="" />
        </Link>
        <div className="flex items-center gap-4">
          <button
          title='Buscar'
            onClick={() => setOpenSearchBar(!openSearchBar)}
            className="justify-centert-ce flex size-8 items-center rounded-lg p-1 text-white hover:bg-gray-700"
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
          <Link
            className="justify-centert-ce flex size-8 items-center rounded-lg text-white hover:bg-gray-700"
            to={'/product/scooters'}
            title='Monopatines'
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1" />
            </svg>
          </Link>

          {/* <Link className='text-white p-1 rounded-full hover:bg-gray-700'>
            <FavIcon></FavIcon>
          </Link> */}
          <Link
          to={'/user/login'}
            onClick={() => setOpenMenu(!openMenu)}
            className="justify-centert-ce flex size-8 items-center rounded-lg text-white hover:bg-gray-700"
            title='Ingresar'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </Link>
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

        {openSearchBar && (
          <aside className="absolute left-0 top-14 flex w-full flex-col bg-gray-700 p-3">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full rounded-lg px-2 py-3"
            />
          </aside>
        )}
      </header>
    </>
  )
}
