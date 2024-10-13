import { useState } from 'react'
import useProfile from '../hooks/useProfile'
import { API_ROUTE } from '../api/API_ROUTE'

export default function Profile() {
  const { userData, loading: loadingUser } = useProfile()
  const [isEditing, setIsEditing] = useState(false)
  console.log('userData', userData)
  const [userShipping, setUserShipping] = useState({})
  const [loading, setLoading] = useState(true)

  function HandleInput() {
    console.log('input info')
  }

  async function saveEditedProfile() {
    try {
      setLoading(true)
      const res = await fetch(`${API_ROUTE}/user/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userShipping }),
      })
      const data = await res.json()
      console.log(data)
    } catch (err) {
      setError(err)
      console.error('¡Hubo un problema con la solicitud!', err)
    } finally {
      setLoading(false)
    }
  }

  function cancelEdit() {
    setIsEditing(false)
  }

  function handleEdit() {
    if (isEditing) {
      saveEditedProfile()
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }
  return (
    <>
      <section className="just-center flex flex-col items-center gap-10 py-20">
        <h1 className="py10 text-center text-4xl">Mi Perfil</h1>
        <div>
          <div
            className={`${isEditing ? 'pointer-events-auto' : 'pointer-events-none'} grid grid-cols-2 items-center justify-center gap-4 px-10 text-primary-700`}
          >
            {!loadingUser && (
              <>
                <input
                  className="input-form"
                  type={'text'}
                  name={'nombre'}
                  placeholder={'Nombre'}
                  value={userData.name}
                  onChange={HandleInput}
                />
                <input
                  className="input-form"
                  type={'text'}
                  name={'apellido'}
                  value={userData.lastname}
                  placeholder={'Apellido'}
                  onChange={HandleInput}
                />
                <input
                  className="input-form"
                  onChange={HandleInput}
                  type={'text'}
                  name={'cp'}
                  value={userData.cp}
                  placeholder={'Codigo Postal'}
                />
                <input
                  className="input-form"
                  onChange={HandleInput}
                  name={'provincia'}
                  type={'text'}
                  value={userData.province}
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
              </>
            )}
          </div>
        </div>
        <div className="just-center flex items-center gap-5">
          <button
            className="w-max rounded-lg bg-primary-500 px-4 py-3 text-lg text-white hover:bg-primary-400"
            onClick={handleEdit}
          >
            {isEditing ? 'Guardar cambios' : 'Editar mis datos'}
          </button>
          {isEditing && (
            <>
              <button
                onClick={cancelEdit}
                className="w-max rounded-lg bg-red-500 px-4 py-3 text-lg text-white hover:bg-red-400"
              >
                Cancelar cambios
              </button>
            </>
          )}
        </div>
      </section>
    </>
  )
}
