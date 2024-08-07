
import Header from './components/partials/Header.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home.jsx"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"
import { useState } from 'react';

function App() {

  // const info = localStorage.getItem('user');
  // const [user, setUser]= useState(JSON.parse(info));
  return (
    <>
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
