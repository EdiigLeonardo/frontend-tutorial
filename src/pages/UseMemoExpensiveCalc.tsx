import { useMemo, useState } from 'react'

function slowFib(n: number): number {
  // Função deliberadamente lenta para demonstrar memoização
  if (n <= 1) return n
  return slowFib(n - 1) + slowFib(n - 2)
}

export default function UseMemoExpensiveCalc() {
  const [n, setN] = useState<number>(20)

  const result = useMemo<number>(() => {
    return slowFib(n)
  }, [n])

  return (
    <section>
      <h2>useMemo</h2>
      <p>Memoização de cálculo caro (Fibonacci recursivo).</p>
      <label>
        n:
        <input
          type="number"
          min={1}
          max={40}
          value={n}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setN(Number(e.target.value) || 1)}
          style={{ width: 70, marginLeft: 6 }}
        />
      </label>
      <p>Resultado: {result}</p>
      <small>Experimente aumentar o n e veja como a memoização evita cálculos repetidos.</small>
    </section>
  )
}