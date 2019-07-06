import { useEffect } from 'react'

export function useClickOutside(ref, clickOutsideAction) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      clickOutsideAction()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}
