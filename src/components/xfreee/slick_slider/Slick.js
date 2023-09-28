import React from 'react';
import './Slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phone1 from 'assets/images/phone1.jpg'
import phone2 from 'assets/images/phone2.jpg'
import phone3 from 'assets/images/phone3.jpg'
import phone4 from 'assets/images/phone4.jpg'
import phone5 from 'assets/images/phone5.jpg'
const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
      return (
        <div className='imag'>
          <Slider {...settings}>
            <div>
              <img src={phone1} alt='phone1'/>
            </div>
            <div>
              <img src={phone2} alt='phone2'/>
            </div>
            <div>
              <img src={phone3} alt='phone3'/>
            </div>
            <div>
              <img src={phone4} alt='phone4'/>
            </div>
            <div>
              <img src={phone5} alt='phone5'/>
            </div>
          </Slider>
        </div>
      );
    };

export default Slick