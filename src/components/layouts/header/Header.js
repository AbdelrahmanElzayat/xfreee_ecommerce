import React, { useEffect, useRef, useState } from 'react';
import Logo from "assets/images/logo.png";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const[scrolled , setScrolled] = useState(false);

  useEffect(()=>{
    window.scrollY > 60 ? setScrolled(true) : setScrolled (false)
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setScrolled(true) : setScrolled (false)
    })
  },[])

  const menuRef = useRef(null);
  const toggleMenuAction = ()=> menuRef.current.classList.toggle('active_menu');

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className='header_row container'>
        {/* icon */}
        <div className='header_logo'>
          <img src={Logo} alt='logo'/>
        </div>
        {/* links */}
        <div className='header_links navigation' ref={menuRef} onClick={toggleMenuAction}>
          <ul className='menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
        </div>
        {/* user login */}
        <div className='user'>
          <Link to='/login'><i className="ri-login-circle-line"></i> Login</Link>
        </div>
        <div className='menu_icon' onClick={toggleMenuAction}>
          <i className="ri-menu-2-line"></i>
        </div>
      </div>
    </header>
  )
}

export default Header