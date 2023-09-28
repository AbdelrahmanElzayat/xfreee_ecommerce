import React from 'react'
import Service from './Service'
// import bg1 from 'assets/images/webpImages/bg1.webp'
import bg2 from 'assets/images/webpImages/bg2.webp'
import bg3 from 'assets/images/webpImages/bg3.webp'
import bg4 from 'assets/images/webpImages/bg4.webp'

import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero_slider'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"> 
                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                        <img src={bg1} alt="..."/>
                    </div> */}
                    <div className="carousel-item active">
                        <img src={bg2} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={bg3} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={bg4} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className='container'>
            <div className='hero_services'>
                <Service title="FREE SHIPPING" description="Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!"><i className="ri-truck-line"></i></Service>
                <Service title="SAFE PAYMENT" description="Pay with the world’s most popular and secure payment methods."><i className="ri-secure-payment-fill"></i></Service>
                <Service title="LOYALTY CUSTOMER" description="Card for the other 30% of their purchases at a rate of 1% cash back."><i className="ri-empathize-line"></i></Service>
            </div>
        </div>
    </div>
  )
}

export default Hero