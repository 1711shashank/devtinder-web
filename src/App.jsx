import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<div>Base Page</div>} />
          <Route path="/login" element={<div>login Page</div>} />
          <Route path="/test" element={<div>test Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}