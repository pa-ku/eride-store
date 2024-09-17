import React, { useState } from 'react'

import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import useLocalStorage from 'use-local-storage'
import { Link } from 'react-router-dom'

export default function FavButton({ id }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  const isFavorite = favorites.includes(id)
  const [isAdmin, setIsAdmin] = useState(false)
  const [toolkit, setToolkit] = useState(false)

  const handleFavorite = () => {
    if (!isAdmin) {
      setToolkit(true)
      setTimeout(() => {
        return setToolkit(false)
      }, 2000)
    } 
  }

  return (
    <>
      <FavCtn className='relative'>
        {toolkit && (
          <div
            className={`p-2 bg-gray-100 w-max -top-10 right-6 rounded-lg z-50 text-black text-md absolute  `}
          >a
            <p>Para agregar favoritos</p>

            <Link
              className='hover:bg-primary-500 px-2 rounded-lg hover:text-white text-primary-500'
              to={'/user/login'}
            >
              ingresa a tu cuenta
            </Link>
          </div>
        )}
        <FavoriteBtn
          title={isFavorite ? 'Eliminar favorito' : 'Añadir favorito'}
          className='Favorite'
          onChange={handleFavorite}
          type='checkbox'
          checked={isFavorite}
        />
        {isFavorite === true && <FavIco $animation={isFavorite}></FavIco>}

        <FavoriteBorderIcon></FavoriteBorderIcon>
      </FavCtn>
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

const FavCtn = styled.label`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: #ff8383;
  cursor: pointer;
  opacity: 1;
  position: absolute;
  transition: 0.2s;
  right: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  scale: 1.1;

  z-index: 100;
`
const FavIco = styled(FavoriteIcon)`
  position: absolute;
  transform: bottom;
  color: #ff5858;
  scale: 0;
  opacity: 0;
  animation: 0.3s ${(props) => (props.$animation ? 'favIn' : 'favOut')} forwards;
  @keyframes favIn {
    0% {
      scale: 0;
    }
    95% {
      scale: 1.1;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
  @keyframes favOut {
    to {
      scale: 1;
      opacity: 0;
    }
  }
`
