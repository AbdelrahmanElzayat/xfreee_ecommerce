import React from 'react'
import Card from 'react-bootstrap/Card';
import {Col} from 'react-bootstrap';
import './Card.css';
import { Link } from 'react-router-dom';
const ProductCard = (props) => {
  return (
    <Col lg="3" md="4">
    <Card className='mb-3'>
        <div className='card_image'>
            <Card.Img variant="top" className='cardImg' src={props.item.imgUrl} alt='cardImg'/>
        </div>
        <Card.Body className='p-2'>
            <Card.Title className='cardTitle'>
                <h3 href="#">{props.item.title}</h3>
            </Card.Title>
            <Card.Text className='cat'>{props.item.category}</Card.Text>
            <Card.Text className='d-flex align-items-center justify-content-between'>
                <span className='price'>${props.item.price}</span> 
                    <Link to={`/productDetails/${props.item.id}`} className='btn btn-dark' >view details</Link> 
            </Card.Text> 
        </Card.Body>
    </Card>
</Col>
  )
}

export default ProductCard