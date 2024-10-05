import { API_ROUTE } from './API_ROUTE'
export async function tokenRequest(token) {
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

export async function registerRequest(user) {
  try {
    const res = await fetch(`${API_ROUTE}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include',
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error('¡Hubo un problema con la solicitud!', err)
  }
}

export async function loginRequest(user) {
  try {
    const res = await fetch(`${API_ROUTE}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include',
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

export async function logOutRequest() {
  try {
    const res = await fetch(`${API_ROUTE}/user/logout`)
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
