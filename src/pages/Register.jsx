export default function Register() {
  async function fetchUser(email, password) {
    try {
      const res = await fetch('api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error('Recurso no encontrado', res.status)
      }

      console.log('Respuesta del servidor:', data)
    } catch (err) {
      console.error('¡Hubo un problema con la solicitud!', err)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Aquí accedemos a los valores usando e.target
    const email = e.target.email.value
    const password = e.target.password.value

    console.log('Email:', email)
    console.log('Password:', password)

    fetchUser(email, password)
  }

  return (
    <>
      <div className='w-full flex items-center justify-center h-screen '>
        <form
          onSubmit={handleSubmit}
          className='flex w-96 flex-col gap-3 mb-20'
        >
          <h1 className='text-3xl'>Registrarse</h1>
          <div className='grid grid-cols-2 gap-2'>
            <input
              name='name'
              type='text'
              required
              className='rounded-lg bg-gray-200 p-3 placeholder:text-gray-700 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400'
              placeholder='Nombre'
            />
            <input
              name='lastname'
              type='text'
              required
              className='rounded-lg bg-gray-200 p-3 placeholder:text-gray-700 placeholder-shown:border-gray-400 valid:border-l-8 valid:border-emerald-400'
              placeholder='Apellido'
            />
          </div>

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
            className='w-full rounded-lg bg-gradient-to-bl from-primary-500 to-primary-800 py-3 text-lg text-white'
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}
