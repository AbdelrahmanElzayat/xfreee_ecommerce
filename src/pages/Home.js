import BestSales from 'components/xfreee/best_sales/BestSales'
import Hero from 'components/xfreee/hero/Hero'
import LimitedOffer from 'components/xfreee/limited_offer/LimitedOffer'
import Mobile from 'components/xfreee/mobile_section/Mobile'
import MainLayout from 'layouts/MainLayout'
import React, { useEffect } from 'react'
import Helmet from 'ui/helmet/Helmet'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Helmet title="Home"/>
        <MainLayout>
            <Hero/>
            <LimitedOffer 
                head="Limited Offer"
                title="IPAD 2023 g9 - 64 gb , 10.2 inch screen"
                price="899"
                description="Lorem ipsum dolor sit amet consectetur illo voluptates labore tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore"
            >
                  <i className="ri-timer-line"></i>
            </LimitedOffer>
            <BestSales/>
            <Mobile/>
        </MainLayout>
    </>
  )
}

export default Home