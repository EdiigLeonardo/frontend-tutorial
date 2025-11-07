import { BrowserRouter } from "react-router-dom"
import NavigationRoutes from "./routes"
import { Suspense } from "react"
import NavBar from "../components/Nav"

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <NavBar />
        <NavigationRoutes>
            {children}
        </NavigationRoutes>
      </BrowserRouter>
    </Suspense>
    </>
  )
}

export default Provider
