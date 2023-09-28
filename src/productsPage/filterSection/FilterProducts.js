import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ListCard from 'ui/card/ListCard'
import { useSelector } from 'react-redux'
const FilterProducts = () => {
    const products = useSelector((state)=>state.products.data)
    const loading = useSelector((state)=>state.products.loading)
  return (
    <>

    <section className='pt-5'>
                <Container>
                    <Row>
                        {
                            loading ? <h5>Loading...</h5> :
                            <ListCard data={products} />                           
                        }
                    </Row>
                </Container>
    </section>
    </>
  )
}

export default FilterProducts