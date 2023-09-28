import React from 'react'

const Service = (props) => {
  return (
    <div className='service'>
        <div className='service_icon'>
            {props.children}
        </div>
        <div className='service_details'>
            <h2>{props.title}</h2>
            <p>{props.description} </p>
        </div>
    </div>
  )
}

export default Service