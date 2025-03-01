import { useEffect, useState } from 'react'
import { API_ROUTE } from './API_ROUTE'

export default function useGetProductById (productId) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function getProductByID () {
    try {
      setLoading(true)
      const res = await fetch(`${API_ROUTE}/scooters/${productId}`)
      const data = await res.json()
      setData(data)
    } catch (err) {
      setError(err)
      console.error('¡Hubo un problema con la solicitud!', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductByID()
  }, [productId])

  return { data, loading, error }
}
