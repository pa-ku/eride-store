import { useState } from 'react'
import { loginRequest } from '../api/auth'

export default function Login() {
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const data = await loginRequest(email, password)
    setMessage(data.error)
    console.log(data)
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
            className='input-form'
            placeholder='email'
          />

          <label className='flex flex-col'>
            <div className='flex w-full flex-row'>
              <input
                name='password'
                type='password'
                className='input-form'
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
