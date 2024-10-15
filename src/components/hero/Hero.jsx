import React from 'react'
import './Hero.css'
import profileImg from '../../assets/Untitled design.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profileImg} alt="" style={{borderRadius: '50%',width: '180px'}} />
        <h1> <span>I'm Imthiyaz, </span>   frontend developer</h1>
        <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est quod neque doloribus nihil unde voluptatum itaque, at dolores qui.</p>
        <div className="hero-action">
      
            <div className="hero-connect">  <AnchorLink className='anchor-link' href="#contact">    Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero