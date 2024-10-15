import React from 'react';
import './Navbar.css';
import logo from '../../assets/Imthiyaz.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="" style={{width: '100px'}}/>
      <ul className="nav-menu">
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
