import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchBar() {
  const searchBarRef = useRef(null)
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [filterByQuery, setFilterByQuery] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [alreadyFecth, setAlreadyFetch] = useState(false)

  async function fetchScooters() {
    setShowResults(true)

    if (!alreadyFecth) {
      try {
        const res = await fetch('http://localhost:5000/api/scooters')
        const data = await res.json()
        console.log('fetch')
        setData(data)
        setAlreadyFetch(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    const filteredByQuery = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    )
    setFilterByQuery(filteredByQuery)
  }, [query])

  useEffect(() => {
    // Función que se ejecuta cuando se hace clic fuera del SearchBar
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowResults(false) // Limpia el input si el clic es fuera del searchBar
      }
    }

    // Agregar el event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setQuery])

  return (
    <span className="relative" ref={searchBarRef}>
      <div className="relative flex h-max w-max items-center justify-start">
        <input
          type="text"
          className="text-red caret-primary focus-visible:border-primary peer rounded-lg border-[1px] border-transparent bg-gray-300 px-3 py-1 outline-none"
          placeholder=" "
          value={query}
          onClick={fetchScooters}
          onChange={(e) => setQuery(e.target.value)}
        />

        <p className="pointer-events-none absolute -translate-x-20 px-3 font-bold text-slate-300 duration-300 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:font-normal peer-placeholder-shown:text-slate-800 peer-focus:-translate-x-20 peer-focus:font-bold peer-focus:text-slate-300">
          Buscar
        </p>
        <button
          onClick={() => setQuery('')}
          className="absolute right-2 text-xl text-primary-700 peer-placeholder-shown:hidden"
        >
          ✕
        </button>
      </div>
      {showResults && query !== '' && filterByQuery.length > 0 && (
        <div className="absolute z-10 mt-2 flex w-full flex-col gap-2 bg-white shadow-lg">
          {filterByQuery.slice(0, 6).map(({ title, _id: id }) => (
            <Link
              className="item-center flex justify-start p-2 hover:bg-primary-500 hover:text-white"
              key={title}
              to={`/product/id/${id}`}
              onClick={() => setQuery('')}
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </span>
  )
}
