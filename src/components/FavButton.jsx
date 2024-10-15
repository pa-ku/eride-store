import { useEffect, useState } from 'react'
import { API_ROUTE } from '../api/API_ROUTE'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'

export default function FavButton({ productId }) {
  const { isAuth, user } = useAuth()
  const [isFav, setIsFav] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      const result = user.favorites.includes(productId)
      setIsFav(result)
    }
  }, [user])

  const handleFavorite = () => {
    if (!isAuth) {
      navigate('/user/account')
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
      <button
        onClick={handleFavorite}
        className={`${isFav ? 'fill-red-400' : 'fill-white'} relative z-20 size-8 items-center justify-center rounded-full stroke-red-500 p-1 hover:shadow-lg`}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
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
