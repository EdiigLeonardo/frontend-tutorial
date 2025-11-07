import { useRef, useState } from 'react'

export default function UseRefFocus() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [text, setText] = useState('')

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <section>
      <h2>useRef</h2>
      <p>Referência ao DOM para focar um input e armazenar valor sem re-render caro.</p>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          ref={inputRef}
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          placeholder="Digite algo"
        />
        <button onClick={focusInput}>Focar</button>
        <span>Length: {text.length}</span>
      </div>
    </section>
  )
}