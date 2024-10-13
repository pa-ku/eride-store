import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import React from 'react'

export default function LoggedMenu({ menuRef, setIsOpen }) {
  const { userLogout, user } = useAuth()

  return (
    <>
      <div
        ref={menuRef}
        className="absolute right-0 z-50 flex w-max flex-col gap-2 rounded-lg bg-white px-7 py-6 shadow-xl"
      >
        <div className="relative flex flex-col items-center gap-3">
          <p className="text-xs">{user.email}</p>
          <h2 className="text-xl font-bold">¡Hola, {user.name}!</h2>
          <Link
            to={'user/profile'}
            onClick={() => setIsOpen(false)}
            className="w-full rounded-lg border border-primary-500 px-4 py-1 text-center text-primary-500 hover:bg-primary-500 hover:text-white"
          >
            Administrar mi cuenta
          </Link>

          <button
            onClick={userLogout}
            className="just-center flex items-center gap-1 stroke-black hover:stroke-primary-500 hover:text-primary-500"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
            Salir
          </button>
        </div>
      </div>
    </>
  )
}
