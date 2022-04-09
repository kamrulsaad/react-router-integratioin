import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Header/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
