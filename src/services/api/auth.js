import { API_ROUTE } from './API_ROUTE'

export async function tokenRequest() {
  try {
    const res = await fetch(`${API_ROUTE}/user/token`, {
      credentials: 'include',
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error('Hubo un problema con la solicitud del token', err)
  }
}
