import { Link, useNavigate } from 'react-router-dom'
import { registerRequest } from '../api/auth'
import { useState } from 'react'

export default function Register() {
  const [message, setMessage] = useState()
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()

    // Aquí accedemos a los valores usando e.target
    const lastname = e.target.password.value
    const name = e.target.password.value
    const email = e.target.email.value
    const password = e.target.password.value

    const user = { lastname, name, password, email }

    const res = await registerRequest(user)

    if (!res.error) {
      navigate('/user/login')
    } else {
      setMessage(res.error)
    }
  }

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <form
          name="register"
          onSubmit={handleSubmit}
          className="mb-20 flex w-96 flex-col gap-3"
        >
          <h1 className="text-3xl">Registrarse</h1>
          <div className="grid grid-cols-2 gap-2">
            <input
              name="name"
              type="text"
              required
              className="input-form"
              placeholder="Nombre"
            />
            <input
              name="lastname"
              type="text"
              required
              className="input-form"
              placeholder="Apellido"
            />
          </div>

          <input
            name="email"
            type="email"
            required
            className="input-form"
            placeholder="email"
          />

          <label className="flex flex-col">
            <div className="flex w-full flex-row">
              <input
                name="password"
                type="password"
                className="input-form"
                placeholder="password"
                required
              />
            </div>
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary-500 py-3 text-lg text-white hover:bg-primary-400"
          >
            Enviar
          </button>
          <Link
            className="text-primary-600 hover:text-primary-400"
            to={'/user/login'}
          >
            Ya tienes una cuenta? Ingresa aqui
          </Link>
          <p className="h-10">{message}</p>
        </form>
      </div>
    </>
  )
}
