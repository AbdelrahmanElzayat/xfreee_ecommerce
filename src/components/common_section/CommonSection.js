import React from 'react';
import './CommonSection.css';
import { Container } from 'react-bootstrap';

const CommonSection = (props) => {
  return (
    <>
       <section className="common_section">
                <Container>
                    <h1 className='text-center'>{props.title}</h1>
                </Container>
        </section>
    </>
  )
}

export default CommonSection