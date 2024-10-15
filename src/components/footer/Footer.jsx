import React from "react";
import "./Footer.css";
import footerLogo from '../../assets/Imthiyaz.jpg';
import user_icon from '../../assets/user_icon.svg';
import '../services/Services.css';

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footerLogo} alt="" style={{width: '120px'}} />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ad quibusdam, laboriosam nobis autem similique id dolores vitae in modi tempora, quaerat voluptate distinctio enim impedit repellat. Culpa, suscipit quos.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">
                Subscribe
            </div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-left"> @ 2024 Imthiyaz.</div>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
