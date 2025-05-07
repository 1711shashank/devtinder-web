import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";

export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>

            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}