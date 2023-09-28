import CommonSection from 'components/common_section/CommonSection'
import LimitedOffer from 'components/xfreee/limited_offer/LimitedOffer'
import MainLayout from 'layouts/MainLayout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProducts } from 'rtk/ProductSlice'
import Helmet from 'ui/helmet/Helmet'

const ProductDetails = () => {
    let productID = useParams();
    const [productt,setProduct] = useState();
    useEffect(()=>{
        // console.log(productID.id);
        fetch(`https://xfreee-ea88b-default-rtdb.firebaseio.com/products/products/${productID.id - 1}.json`)
        .then((res)=>res.json())
        .then((product)=>{
            setProduct(product);
            console.log(product);
        })
    },[])
  return (
    <>
          <Helmet title={productt?.title}/>
        <MainLayout>
            <CommonSection title={productt?.title}/>
            <section className='mt-5'>
                    <LimitedOffer 
                        head="product details" 
                        title={productt?.title}
                        price={productt?.price}
                        description={productt?.description}
                    />
            </section>
        </MainLayout>
    </>
  )
}

export default ProductDetails