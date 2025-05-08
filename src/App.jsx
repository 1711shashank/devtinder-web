import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Connections from "./components/Connections";

export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>

            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}