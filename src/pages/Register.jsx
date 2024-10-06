import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { userRegister, message } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const lastname = e.target.password.value
    const name = e.target.password.value
    const email = e.target.email.value
    const password = e.target.password.value
    userRegister({ lastname, name, password, email })
    /*     if (name === '') return setMessage('Rellena el campo de Nombre')
    if (lastname === '') return setMessage('Rellena el campo de Apellido')
    if (email === '') return setMessage('Rellena el campo de Email')
    if (password === '') return setMessage('Rellena el campo de Contraseña')
    if (password.length < 6)
      return setMessage('La contraseña debe tener al menos 6 caracteres')
    else {
      setMessage('registered')
      userRegister({ lastname, name, password, email })
    } */
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
              autoComplete="name"
              className="input-form"
              placeholder="Nombre"
            />
            <input
              name="lastname"
              type="text"
              autoComplete="lastname"
              className="input-form"
              placeholder="Apellido"
            />
          </div>

          <input
            name="email"
            type="email"
            autoComplete="email"
            className="input-form"
            placeholder="email"
          />

          <label className="flex flex-col">
            <div className="flex w-full flex-row">
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                className="input-form"
                placeholder="password"
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
