import React from 'react'
import ProductCard from './ProductCard'

const ListCard = (props) => {
  return (
    <>
            
    {props.data?.map((items, i)=>(
        <ProductCard item={items} key={i}/>
    )
    )}
</>
  )
}

export default ListCard