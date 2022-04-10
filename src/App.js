import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Login from "./Components/Header/Login/Login";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
