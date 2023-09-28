import React from 'react';
import './Mobile.css';
import { Container, Row } from 'react-bootstrap';
import ListCard from 'ui/card/ListCard';
import { useSelector } from 'react-redux';

const Mobile = () => {
    const products = useSelector((state)=>state.products.data)
    const loading = useSelector((state)=>state.products.loading)
    const mobileProducts = products.filter(item => item.category === "mobile");
    
  return (
    <>
    <div className='mobile_section'>
        <h2>New Arrivals</h2>
        <Container>
            <Row>
                {
                    loading? <h5>Loading...</h5> :
                    <ListCard data={mobileProducts}/>
                }
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Mobile