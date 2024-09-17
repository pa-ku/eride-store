import { useState } from 'react'

export default function Login() {
  const [message, setMessage] = useState('')

  async function fetchUser(email, password) {
    try {
      const res = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      setMessage(data.error)
      console.log(data);
      
      if (!res.ok) {
        throw new Error(res)
      }
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    fetchUser(email, password)
  }

  return (
    <>
      <div className='w-full flex items-center justify-center h-screen '>
        <form
          onSubmit={handleSubmit}
          className='flex w-80 flex-col gap-3 mb-20'
        >
          <h1 className='text-3xl'>Login</h1>

          <input
            name='email'
            type='email'
            required
            className='rounded-lg bg-gray-200 p-3 placeholder:text-gray-700 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400'
            placeholder='email'
          />

          <label className='flex flex-col'>
            <div className='flex w-full flex-row'>
              <input
                name='password'
                type='password'
                className='rounded-l-lg bg-gray-200 w-full p-3 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400 placeholder:text-gray-700'
                placeholder='password'
                required
              />
            </div>
          </label>

          <button
            type='submit'
            className='w-full rounded-lg bg-primary-500 py-3 text-lg text-white'
          >
            Enviar
          </button>
          <p>{message}</p>
        </form>
      </div>
    </>
  )
}
