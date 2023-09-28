import CommonSection from 'components/common_section/CommonSection'
import MainLayout from 'layouts/MainLayout'
import FilterProducts from 'productsPage/filterSection/FilterProducts'
import React, { useEffect } from 'react'
import Helmet from 'ui/helmet/Helmet'

const Products = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <>
    <Helmet title="products"/>
        <MainLayout>
            <CommonSection title="Products"/>
            <FilterProducts/>
        </MainLayout>
    </>
  )
}

export default Products