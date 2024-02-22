import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-white py-2">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/"><img src="./logo.png" alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/allproduct">All Products</Link>
        </li>
      </ul>
      <Link className='btn text-black' style={{textDecoration:'none'}} to='/cart'><i class="bi bi-cart3"></i> Cart</Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
