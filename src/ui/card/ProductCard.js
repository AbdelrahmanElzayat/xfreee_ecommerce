import React from 'react'
import Card from 'react-bootstrap/Card';
import {Col} from 'react-bootstrap';
import {motion} from 'framer-motion'
import './Card.css';
import { Link } from 'react-router-dom';
const ProductCard = (props) => {
  return (
    <Col lg="3" md="4">
    <Card className='mb-3'>
        <motion.div whileHover={{scale:.9}}>
            <Card.Img whileHover={{scale:.9}} variant="top" className='cardImg' src={props.item.imgUrl}/>
        </motion.div>
        <Card.Body className='p-2'>
            <Card.Title className='cardTitle'>
                <h3 href="#">{props.item.title}</h3>
            </Card.Title>
            <Card.Text className='cat'>{props.item.category}</Card.Text>
            <Card.Text className='d-flex align-items-center justify-content-between'>
                <span className='price'>${props.item.price}</span> 
                <motion.div whileTap={{scale:1.2}}>
                    <Link to={`/productDetails/${props.item.id}`} className='btn btn-dark' >view details</Link> 
                </motion.div>
            </Card.Text> 
        </Card.Body>
    </Card>
</Col>
  )
}

export default ProductCard