import React, { useState } from 'react';
import './LimitedOffer.css';
import { Col, Container, Row } from 'react-bootstrap';
import noon from 'assets/images/noon.png';
import Slick from '../slick_slider/Slick';
import Modal from 'ui/modal/Modal';

const LimitedOffer = (props) => {
    const [showing, setShowing] = useState(false);
    const [shopNow , setShopNow] = useState(false);
  return (
    <>
        <div className='lOffer'>
            <h2 className='text-center pb-5'>
                <span className='mx-2'>{props.head}</span>
                {props.children}
            </h2>
            <Container>
                <Row className='d-flex align-items-center gap-5'>
                    <Col lg="7">
                        <div className='product_content'>
                            <h3 className='product_title'>{props.title}</h3>
                            <div className='buy_row'>
                                <div className='buy_icon'>
                                    <div className='buy_btn' onClick={()=>setShowing(true)}>
                                        <span>buy now</span>
                                        <i className="ri-shopping-cart-2-fill"></i>
                                    </div>
                                    <img src={noon} alt='noon'/>
                                </div>
                                <div className='product_price'>
                                    <span>price: ${props.price}</span>
                                </div>
                            </div>
                            <div className='product_description'>
                                <h4>Overview:</h4>
                                <p>{props.description}</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className='product_img'>
                            {/* <img src={phone} alt='phone'/> */}
                            <Slick/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Modal visible={showing} closeModal = {()=>{setShowing(false); setShopNow(false)}}>
                <div className='showing_content'>
                    <div className={`${!shopNow ? 'promo' : 'promo_shop'}`}>
                        <span>KR49</span>
                        <button className='btn btn-light' onClick={()=>setShopNow(true)}>{`${!shopNow ? 'copy':'Shop Now'}`} <i className={`${shopNow && 'ri-external-link-line'}`}></i></button>
                    </div>
                    <div className='showing_title'>
                        <h3>{props.title}</h3>
                    </div>
                </div>
                <div className='showing_footer'>
                    <span>Use the code during checkout and get 10% discount</span>
                    <h3>To become the price $799  <span>$899</span></h3>
                </div>
        </Modal>
    </>
    
  )
}

export default LimitedOffer