import { BrowserRouter, Route, Routes } from "react-router"
import { Landing } from "./landing/Landing"
import { CoursesList } from "./courses/CoursesList"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/my-progress" element={<h1>Progreso</h1>} />
      </Routes>
    </BrowserRouter>
  )
}