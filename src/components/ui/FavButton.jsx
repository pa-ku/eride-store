import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function FavButton({ id }) {
  const [favorites, setFavorites] = useState('favorites', [])
  const isFavorite = favorites.includes(id)
  const [isAdmin, setIsAdmin] = useState(false)
  const [toolkit, setToolkit] = useState(false)

  const handleFavorite = () => {
    if (!isAdmin) {
      setToolkit(true)
      const timer = setTimeout(() => {
        return setToolkit(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }

  return (
    <>
      <div className="relative text-red-500">
        {toolkit && (
          <div
            className={`absolute -left-44 -top-16 z-10 w-max rounded-lg bg-gray-100 p-2 text-black`}
          >
            <p>Para agregar favoritos</p>

            <Link
              className="rounded-lg px-2 text-primary-500 hover:bg-primary-500 hover:text-white"
              to={'/user/login'}
            >
              ingresa a tu cuenta
            </Link>
          </div>
        )}
        <FavoriteBtn
          title={isFavorite ? 'Eliminar favorito' : 'Añadir favorito'}
          className="Favorite"
          onChange={handleFavorite}
          type="checkbox"
          checked={isFavorite}
        />
        {isFavorite === true && <p>asd</p>}
        <label
          htmlFor="favorite"
          className="relative m-0 flex size-7 cursor-pointer items-center justify-center stroke-red-400 p-0"
        >
          <input
            id="favorite"
            className="peer absolute appearance-none opacity-0"
            type="checkbox"
          />
          <svg
            className="h-full w-full text-transparent duration-200 peer-checked:text-primary-500"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </label>
      </div>
    </>
  )
}

const FavoriteBtn = styled.input`
  position: absolute;
  right: 0px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 100;
  &:hover {
    color: #ff2222;
  }

  @media (max-width: 700px) {
    opacity: 1;
    margin: 0em;

    margin-inline: 1em;
  }
`
