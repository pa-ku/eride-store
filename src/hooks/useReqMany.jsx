import { useEffect, useState } from 'react'
import { API_ROUTE } from '../api/API_ROUTE'

export default function useReqMany(idArray) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function requestMany() {
    try {
      setLoading(true)
      const res = await fetch(`${API_ROUTE}/scooters/multiple`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: idArray }),
      })
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
    requestMany()
  }, [])

  return { data, loading, error }
}
