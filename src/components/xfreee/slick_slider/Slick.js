import React from 'react';
import './Slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phone1 from 'assets/images/webpImages/phone1.webp'
import phone2 from 'assets/images/webpImages/phone2.webp'
import phone3 from 'assets/images/webpImages/phone3.webp'
import phone4 from 'assets/images/webpImages/phone4.webp'
import phone5 from 'assets/images/webpImages/phone5.webp'
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