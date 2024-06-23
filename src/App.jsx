import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from "./pages/auth/login/login.jsx";
import Register from "./pages/auth/register/register.jsx";
import Main from "./pages/main/main.jsx";
import WithAuth from "./HOC/withAuth.jsx";
import Verification from "./pages/verification/verification.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path={'/'} element={<Main />} index />
      <Route  path={'register'} element={<Register />}/>
      <Route  path={'login'} element={<Login />}/>
      <Route  path={'verification'} element={<Verification />}/>
    </Route>
));
function App() {

  return <RouterProvider router={router} />
}

export default App
