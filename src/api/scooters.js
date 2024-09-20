export const API_ROUTE = 'https://eride-api.vercel.app/api'

export async function requestOneById(productId) {
  try {
    const res = await fetch(`${API_ROUTE}/scooters/${productId}`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error('¡Hubo un problema con la solicitud!', err)
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
    return data
  } catch (err) {
    console.error('¡Hubo un problema con la solicitud!', err)
  }
}
