import React from 'react';
import './Navbar.css';
import logo from '../../assets/Imthiyaz.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react';

function Navbar() {

  const menuRef = useRef()

  const openMenu = () => {

    menuRef.current.style.right = '0'
  }
  const closeMenu = () => {

    menuRef.current.style.right = '-390px'
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" style={{width: '100px'}}  className="navbar-logo" onClick={() => window.location.href = "#home"}/>
      {/* <img src={theme_pattern} alt="" /> */}
      <img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li>
          <AnchorLink className='anchor-link' href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#about">About Me</AnchorLink>
        </li>
        {/* <li>
          <AnchorLink className='anchor-link' href="#services">Services</AnchorLink>
        </li> */}
        <li>
          <AnchorLink className='anchor-link' href="#work">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#contact">Contact</AnchorLink>
        </li>
      </ul>
      <div className='nav-connect'>
      <AnchorLink className='anchor-link' href="#contact">    Connect With Me</AnchorLink>
    
      </div>
    </div>
  );
}

export default Navbar;
