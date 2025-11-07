import { useEffect, useState } from 'react'

// Hook customizado para sincronizar estado com localStorage, com tipos genéricos
export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? (JSON.parse(item) as T) : initialValue
    } catch (e) {
      console.warn('useLocalStorage: erro ao ler localStorage', e)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.warn('useLocalStorage: erro ao gravar localStorage', e)
    }
  }, [key, value])

  return [value, setValue]
}