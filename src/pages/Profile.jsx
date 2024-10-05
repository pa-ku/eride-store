import { useState } from 'react'

export default function Profile() {
  const [hasNumber, setHasNumber] = useState(false)

  function HandleInput() {
    console.log('hi')
  }
  return (
    <>
      <h1 className='text-center text-4xl py10'>Mi Perfil</h1>
      <form className="min-h-screen">
        <div className="grid grid-cols-2 items-center justify-center px-10">
          <input
            type={'text'}
            name={'nombre'}
            placeholder={'Nombre y Apellido'}
            onChange={HandleInput}
          />
          <input
            onChange={HandleInput}
            type={'email'}
            name={'email'}
            placeholder={'Email'}
          />
          <input
            onChange={HandleInput}
            type={'text'}
            name={'cp'}
            placeholder={'Codigo Postal'}
          />
          <input
            onChange={HandleInput}
            name={'provincia'}
            type={'text'}
            placeholder={'Provincia'}
          />
          <input
            onChange={HandleInput}
            name={'localidad'}
            type={'text'}
            placeholder={'Localidad'}
          />
          <input
            onChange={HandleInput}
            type={'text'}
            name={'calle'}
            placeholder={'Calle'}
          />
          <div className="flex h-10 w-full items-center justify-center gap-5">
            {hasNumber === false ? (
              <input
                onChange={HandleInput}
                type={'text'}
                name={'NCalle'}
                placeholder={'Numero de Calle'}
              />
            ) : (
              <div className="w-full"></div>
            )}
            <button
              type="button"
              className={`${hasNumber && 'border-primary-700 text-primary-700'} w-full rounded-xl border-2 border-black`}
              onClick={() => setHasNumber(!hasNumber)}
              name="NCalle"
            >
              {hasNumber ? 'Con numeración' : 'Sin Numeración'}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
