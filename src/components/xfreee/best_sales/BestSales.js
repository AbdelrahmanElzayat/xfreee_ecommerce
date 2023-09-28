import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ListCard from 'ui/card/ListCard';
import { useSelector } from 'react-redux';
const BestSales = () => {
    const products = useSelector((state)=>state.products.data)
    const loading = useSelector((state)=>state.products.loading)
    const ipadProducts = products.filter(item => item.category === "ipad");
    return (
    <>
    <div className='mobile_section'>
        <h2>Best Sales</h2>
        <Container>
            <Row>
                {
                    loading ? <h5>loading...</h5> : 
                    <ListCard data={ipadProducts}/>
                }
            </Row>
        </Container>
    </div>
    </>
  )
}

export default BestSales