const production = true
export const API_ROUTE = production
  ? 'https://eride-api.vercel.app/api'
  : 'http://localhost:3000/api'

export async function registerRequest(user) {
  try {
    const res = await fetch(`${API}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await res.json()
    if (res.ok) {
      console.log('User registration successful')
    }
    return data
  } catch (err) {
    console.error('¡Hubo un problema con la solicitud!', err)
  }
}

export async function loginRequest(user) {
  try {
    const res = await fetch(`${API}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await res.json()
    if (res.ok) {
      console.log('Login successful')
    }
    return data
  } catch (error) {
    console.error(error)
  }
}
