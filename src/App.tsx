import { lazy, Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import ErrorBoundary from "@/components/error-boundary"

const Login = lazy(() => import("@/pages/Login"))
const Signup = lazy(() => import("@/pages/Signup"))

export function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Suspense fallback={<Skeleton />}>
	  <BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} /> 
	      <Route path="/signup" element={<Signup />} />
	    </Routes>
	  </BrowserRouter>
	</Suspense>
      </TooltipProvider>
    </ErrorBoundary>
  )
}

export default App
