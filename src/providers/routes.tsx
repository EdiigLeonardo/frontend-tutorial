import { Routes, Route } from "react-router-dom"
import * as components from "../pages"

const IaGenerationRoutes: React.JSX.Element = (
  <>
    <Route path="/ia/useCounter" element={<components.UseStateCounter />} />
    <Route path="/ia/useCallback" element={<components.UseCallbackExample />} />
    <Route path="/ia/useEffect" element={<components.UseEffectFetch />} />
    <Route path="/ia/useMemo" element={<components.UseMemoExpensiveCalc />} />
    <Route path="/ia/useRef" element={<components.UseRefFocus />} />
  </>
)

const NavigationRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Routes>
      <Route path="/" element={<>{children}</>} />
      {IaGenerationRoutes}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default NavigationRoutes;