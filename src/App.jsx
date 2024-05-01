import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./RouteProtection";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"/>
          <Route element={<ProtectedRoute/>}>
            <Route element={<Home/>} path="/"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
