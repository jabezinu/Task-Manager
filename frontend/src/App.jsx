import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/todos/create" element={<Add />} />
      <Route path="/todos/show" element={<Show />} />
      <Route path="/todos/delete" element={<Delete />} /> */}
    </Routes>
  )
}