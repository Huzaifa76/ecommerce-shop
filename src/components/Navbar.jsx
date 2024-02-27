import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../store/slices/cartSlice'

const Navbar = () => {
  const {cart, totalQuantity}=useSelector((state)=>state.allcart);

  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart]);
  return (
    <> 
    <div className="top_bar text-center text-white py-2 px-lg-2 px-sm-0" style={{backgroundColor:"#040406",fontSize:"14px",fontWeight:'bold'}}><marquee width = "50%" direction = "right"><i className="bi bi-box-seam-fill"></i> Deliver all over the Pakistan. Free Delivery on the order above 50000 <i className="bi bi-box-seam-fill"></i> </marquee></div>
  <nav className="navbar navbar-expand-lg bg-white py-2 px-lg-2 px-sm-0">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/"><img src="./logo.png" alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-black" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-lg-4 mx-sm-0">
          <Link className="nav-link text-black" to="/shop">All Products</Link>
        </li>
      </ul>
      <Link className='btn' style={{textDecoration:'none'}} to='/cart'><i className="bi bi-cart3"></i> Cart {totalQuantity}</Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
