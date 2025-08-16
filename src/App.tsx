import { BrowserRouter, Route, Routes } from "react-router"
import { Landing } from "./landing/Landing"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}