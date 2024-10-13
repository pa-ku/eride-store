import { useEffect, useState } from 'react'

export function useOutsideClick(ref) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return { isOpen, setIsOpen }
}
