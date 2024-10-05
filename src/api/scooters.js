import { API_ROUTE } from './API_ROUTE'

export async function requestNames() {
  try {
    const res = await fetch(`${API_ROUTE}/scooters/names`)
    console.log('request names', res)

    const data = await res.json()
    return data
  } catch (err) {
    console.error('Hubo un problema con la solicitud!', err)
  }
}

export async function requestManyId(productsArray) {
  try {
    const res = await fetch(`${API_ROUTE}/scooters/multiple`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: productsArray }),
    })
    const data = await res.json()
    console.log('request many', res)

    return data
  } catch (err) {
    console.error('¡Hubo un problema con la solicitud!', err)
  }
}

export async function requestAllProducts() {
  try {
    const res = await fetch(`${API_ROUTE}/scooters`)
    if (!res.ok) {
      throw new Error('Recurso no encontrado', res.status)
    }
    const data = await res.json()
    return data
  } catch (err) {
    console.error('¡Hubo un problema con la solicitud!', err)
  }
}
