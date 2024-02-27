import React from 'react'
import '../src/App.css'
import Home from './pages/Home'
import AllProduct from './pages/AllProduct';
import Cart from './pages/Cart'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<AllProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='*' element={<div>Page not Found!</div>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
