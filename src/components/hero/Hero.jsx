import React from 'react'
import './Hero.css'
import profileImg from '../../assets/Untitled design.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profileImg} alt="" style={{borderRadius: '50%',width: '180px'}} />
        <h1> <span>I'm Imthiyaz, </span>   frontend developer</h1>
        <p  >Hi! I’m Imthiyaz, a passionate and creative front-end developer with a knack for designing and developing intuitive user interfaces. I specialize in building responsive and interactive websites using HTML, CSS, and JavaScript. I am constantly learning new technologies and improving my skill set to stay up-to-date in the ever-evolving field of web development.</p>
        <div className="hero-action">
      
            <div className="hero-connect">  <AnchorLink className='anchor-link' href="#contact">    Connect With Me</AnchorLink></div>
            <div className="hero-resume">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
        </div>
    </div>
  )
}

export default Hero