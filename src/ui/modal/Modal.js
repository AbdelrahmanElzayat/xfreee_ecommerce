import React from 'react';
import ReactDOM  from 'react-dom';
import './Modal.css';

const Modal = (props) => {
    if(!props.visible){
        return null
    }
  return ReactDOM.createPortal(
    <div className={`loffer_overflow`} onClick={props.closeModal}>
            <div className='loffer_showing' onClick={(e)=>e.stopPropagation()}>
                {props.children},
            </div>
    </div>,
    document.querySelector('#modal-root')
  )
}

export default Modal