import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./RouteProtection";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Assignments from "./pages/Assignments";
import Exams from "./pages/Exams";
import Homeworks from "./pages/Homeworks";
import Community from "./pages/Community";
import Grades from "./pages/Grades";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"/>
          <Route element={<ProtectedRoute/>}>
            <Route element={<Home />} path="/home" />
            <Route element={<Assignments />} path="/assignments" />
            <Route element={<Exams />} path="/exams"/>
            <Route element={<Homeworks />} path="/homeworks" />
            <Route element={<Community />} path="/community"/>
            <Route element={<Grades />} path="/grades"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
