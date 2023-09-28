import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='footer'>
    <Container>
        <Row>
            <Col lg='3' className='LogoImg'>
                <img src={Logo} alt='LOGO'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </Col>
            <Col lg='3' className='useful'>
                <h3>Useful Links</h3>
                <div className='usefulList'>
                    <ul>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to='/'>Terms</Link></li>
                        <li><Link to='/'>Privacy</Link></li>
                    </ul>
                </div>
            </Col>
            <Col lg='3' className='contact'>
                <h3>Contact Us</h3>
                <div className='contactInfo'>
                    <ul>
                        <li><i className="ri-mail-fill"></i> Name@Example.com</li>
                        <li><i className="ri-phone-fill"></i> +0201090746599</li>
                        <li><i className="ri-map-pin-2-fill"></i> 44ST-name-name</li>
                    </ul>
                </div>
                <div className='socialLinks'>
                    <ul>
                        <li><Link to='/' className='face'><i className="ri-facebook-fill"></i></Link></li>
                        <li><Link to='/' className='inst'><i className="ri-instagram-fill"></i></Link></li>
                        <li><Link to='/' className='face'><i className="ri-twitter-fill"></i></Link></li>
                    </ul>
                </div>
            </Col>
            <Col lg='3'>
                <h3>Location</h3>
                <div className='map'>
                    <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.2001124173985!2d30.985325627320215!3d30.79697472509284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7cbd780253547%3A0x9337070c260069b7!2z2YXYsdmD2LIg2LfZhti32Kcg2YTZhNin2LTYudipIC0g2LfZhti32Kcg2LPZg9in2YY!5e0!3m2!1sar!2seg!4v1692255017997!5m2!1sar!2seg" width="400" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </Col>
        </Row>
    </Container>
</footer>
  )
}

export default Footer