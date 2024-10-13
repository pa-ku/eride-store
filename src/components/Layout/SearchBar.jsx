import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReqNames from '../../hooks/useReqNames'

export default function SearchBar() {
  const searchBarRef = useRef(null)
  const [query, setQuery] = useState('')
  const [filterByQuery, setFilterByQuery] = useState([])
  const [showResults, setShowResults] = useState(false)

  const { data, loading, requestNames } = useReqNames()

  function handleInputMenu() {
    requestNames()
    setShowResults(true)
  }

  useEffect(() => {
    const filteredByQuery = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    )
    setFilterByQuery(filteredByQuery)
  }, [query])

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setQuery])

  return (
    <span className="relative" ref={searchBarRef}>
      <div className="relative flex h-max w-64 items-center justify-start">
        <input
          type="text"
          className="text-red caret-primary focus-visible:border-primary peer w-64 rounded-md border-transparent bg-gray-100 px-3 py-0.5 outline-none"
          placeholder=" "
          value={query}
          onClick={handleInputMenu}
          onChange={(e) => setQuery(e.target.value)}
        />

        <p className="pointer-events-none absolute -translate-x-20 px-3 text-slate-300 duration-300 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-slate-800 peer-focus:-translate-x-20 peer-focus:text-gray-100">
          Buscar
        </p>
        <button
          onClick={() => setQuery('')}
          className="absolute right-2 text-xl text-primary-700 peer-placeholder-shown:hidden"
        >
          ✕
        </button>
      </div>
      {!loading && showResults && query !== '' && filterByQuery.length > 0 && (
        <div className="absolute z-10 mt-2 flex w-full flex-col gap-2 rounded-md bg-white shadow-lg">
          {filterByQuery.slice(0, 6).map(({ title, _id: id }) => (
            <Link
              className="item-center flex justify-start rounded-md p-2 hover:bg-primary-500 hover:text-white"
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
