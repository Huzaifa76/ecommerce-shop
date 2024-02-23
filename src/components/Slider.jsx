import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <>
    <div className='banner_img'>
      <img src="./banner.jpg" alt="" className='object-fit-cover'/>
      <div className="banner_content">
      <h1>OPPO A78</h1>
      <h6 className='mb-4'>FHD+ AMOLED Display <br /> 67W SUPERVOOCTM <br /> 8GB + 8GB Extended RAM</h6>
      <Link className='btn_shop' to='/store' style={{textDecoration:'none'}} >Shop Now</Link>
      </div>
    </div>
    </>
  )
}

export default Slider
