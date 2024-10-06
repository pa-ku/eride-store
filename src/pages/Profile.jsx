import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const [hasNumber, setHasNumber] = useState(false)
  const { user } = useAuth()

  console.log(user)

  function HandleInput() {
    console.log('hi')
  }
  return (
    <>
      <section className="just-center flex flex-col items-center gap-10 py-20">
        <h1 className="py10 text-center text-4xl">Mi Perfil</h1>
        <form className="">
          <div className="grid grid-cols-2 items-center justify-center gap-4 px-10">
            <input
              className="input-form"
              type={'text'}
              name={'nombre'}
              placeholder={'Nombre'}
              onChange={HandleInput}
            />
            <input
              className="input-form"
              type={'text'}
              name={'apellido'}
              placeholder={'Apellido'}
              onChange={HandleInput}
            />
            <input
              className="input-form"
              onChange={HandleInput}
              type={'email'}
              name={'email'}
              placeholder={'Email'}
            />
            <input
              className="input-form"
              onChange={HandleInput}
              type={'text'}
              name={'cp'}
              placeholder={'Codigo Postal'}
            />
            <input
              className="input-form"
              onChange={HandleInput}
              name={'provincia'}
              type={'text'}
              placeholder={'Provincia'}
            />
            <input
              className="input-form"
              onChange={HandleInput}
              name={'localidad'}
              type={'text'}
              placeholder={'Localidad'}
            />
            <input
              className="input-form"
              onChange={HandleInput}
              type={'text'}
              name={'calle'}
              placeholder={'Calle'}
            />
            <input
              onChange={HandleInput}
              type={'text'}
              name={'NCalle'}
              className="input-form"
              placeholder={'Numero de Calle'}
            />
          </div>
        </form>
        <button
          type="submit"
          className="w-max rounded-lg bg-primary-500 px-4 py-3 text-lg text-white hover:bg-primary-400"
        >
          Editar mis datos
        </button>
      </section>
    </>
  )
}
