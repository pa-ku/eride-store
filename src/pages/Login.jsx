import { useState } from 'react'
import { loginRequest } from '../api/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const res = await loginRequest(email, password)
    if (!res.error) {
      navigate('/')
    } else {
      setMessage(res.error)
    }
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
            className='w-full hover:bg-primary-400 rounded-lg bg-primary-500 py-3 text-lg text-white'
          >
            Enviar
          </button>
          <Link
            className='text-primary-600 hover:text-primary-400'
            to={'/user/register'}
          >
            No tienes cuenta? registrate aqui
          </Link>
          <p className='h-10'>{message}</p>
        </form>
      </div>
    </>
  )
}
