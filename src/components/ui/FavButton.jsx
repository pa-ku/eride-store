import React, { useState } from 'react'
import { API_ROUTE } from '../../api/API_ROUTE'
import { useAuth } from '../../context/AuthContext'

export default function FavButton({ productId }) {
  const [toolkit, setToolkit] = useState(false)
  const { isAuth } = useAuth()

  const handleFavorite = () => {
    if (!isAuth) {
      setToolkit(true)
      const timer = setTimeout(() => {
        return setToolkit(false)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      console.log(productId)

      sendNewFavorite()
    }
  }

  async function sendNewFavorite() {
    try {
      const res = await fetch(`${API_ROUTE}/user/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productId,
        }),
        credentials: 'include',
      })
      const data = await res.json()
      console.log('data', data)
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  return (
    <>
      <div
        className={`${toolkit && 'opacity-100 duration-500'}pointer-events-none fixed left-0 right-0 top-0 z-50 m-auto w-80 rounded-b-xl bg-primary-500 p-3 text-center text-white opacity-0 duration-500`}
      >
        Para guardar favoritos debes Logearte
      </div>

      <button
        onClick={handleFavorite}
        className="z-50 rounded-full stroke-red-500 p-2 text-2xl hover:shadow-lg"
      >
        <svg
          className="size-7"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </button>
    </>
  )
}
