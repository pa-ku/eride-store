import { useEffect, useState } from 'react'
import { API_ROUTE } from '../api/API_ROUTE'

export default function useReqOne(id) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function requestOne() {
    try {
      setLoading(true)
      const res = await fetch(`${API_ROUTE}/scooters/${id}`)
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
    requestOne()
  }, [])

  return { data, loading, error }
}
