import { memo, useCallback, useMemo, useState } from 'react'

type ListProps = {
  items: string[]
  onSelect: (item: string) => void
}

const List = memo(function List({ items, onSelect }: ListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          {item} <button onClick={() => onSelect(item)}>Selecionar</button>
        </li>
      ))}
    </ul>
  )
})

export default function UseCallbackExample() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  const items = useMemo(() => ['React', 'Vite', 'Hooks', 'State', 'Effect', 'Memo', 'Callback'], [])

  const filtered = useMemo<string[]>(() => {
    return items.filter((i) => i.toLowerCase().includes(query.toLowerCase()))
  }, [items, query])

  const handleSelect = useCallback((item: string) => {
    setSelected(item)
  }, [])

  return (
    <section>
      <h2>useCallback</h2>
      <p>Callback memorizado para evitar re-render de componentes filhos memoizados.</p>
      <input
        placeholder="Filtrar"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
      <List items={filtered} onSelect={handleSelect} />
      {selected && <p>Selecionado: {selected}</p>}
    </section>
  )
}