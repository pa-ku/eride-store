import { useAuth } from '../../context/AuthContext'

export default function LoggedMenu() {
  const { userLogout } = useAuth()

  return (
    <>
      <div className="absolute right-0 flex w-max flex-col gap-2 rounded-lg bg-white px-5 py-3 shadow-xl">
        <button className="hover:text-primary-500">Mi Perfil</button>
        <button onClick={userLogout} className="hover:text-primary-500">
          LogOut
        </button>
      </div>
    </>
  )
}
