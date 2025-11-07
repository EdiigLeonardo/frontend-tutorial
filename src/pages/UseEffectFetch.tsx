import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

export default function UseEffectFetch() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Falha ao buscar usuários')
        const data = (await res.json()) as User[]
        if (!cancelled) setUsers(data)
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        if (!cancelled) setError(msg)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <section>
      <h2>useEffect</h2>
      <p>Busca de dados em um efeito (JSONPlaceholder).</p>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      {!loading && !error && (
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.name} — {u.email}</li>
          ))}
        </ul>
      )}
    </section>
  )
}