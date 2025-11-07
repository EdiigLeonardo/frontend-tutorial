import { useState } from 'react'

export default function UseStateCounter() {
  const [count, setCount] = useState<number>(0)
  const [step, setStep] = useState<number>(1)

  return (
    <section>
      <h2>useState</h2>
      <p>Contador simples usando estado.</p>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => setCount((c) => c - step)}>-{step}</button>
        <strong>{count}</strong>
        <button onClick={() => setCount((c) => c + step)}>+{step}</button>
        <label style={{ marginLeft: 12 }}>
          Passo:
          <input
            type="number"
            value={step}
            min={1}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStep(Number(e.target.value) || 1)}
          style={{ width: 60, marginLeft: 6 }}
          />
        </label>
        <button onClick={() => setCount(0)} style={{ marginLeft: 12 }}>Reset</button>
      </div>
    </section>
  )
}