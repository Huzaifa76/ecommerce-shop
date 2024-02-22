import React from 'react'

const Slider = () => {
  return (
    <>
    {/* <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/11237838/pexels-photo-11237838.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="Slider-1"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/15255845/pexels-photo-15255845/free-photo-of-smartphone-on-stand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/1275228/pexels-photo-1275228.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div> */}
    
    <div className='banner_img'>
      <img src="./banner.jpg" alt="" className='object-fit-cover'/>
      <div className="banner_content">
      <h1>OPPO A78</h1>
      <h6>FHD+ AMOLED Display <br /> 67W SUPERVOOCTM <br /> 8GB + 8GB Extended RAM</h6>
      </div>
    </div>
    </>
  )
}

export default Slider
