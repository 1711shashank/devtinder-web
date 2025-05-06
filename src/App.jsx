import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";

export default function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>

          <Route path="/" element={<Body />}>
            <Route path="/login" element={<div>login Page</div>} />
            <Route path="/test" element={<div>test Page</div>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}