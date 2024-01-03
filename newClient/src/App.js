import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/adminPanel";
import Doctors from "./components/doctors";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route exact path='/admin' element={<PrivateRoute />}>
            <Route index element={<AdminPanel />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
