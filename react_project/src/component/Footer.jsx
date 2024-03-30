import React from 'react';
import './footer.css';
import { Link } from "react";


function Footer() {
  return (
    <div  className="footer-container">
      <section className="footer-subscription">
<p className="footer-subscription-heading">
    Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. 
</p>
<p className="footer-subscription-text">
    Dolor sit amet 
    consectetur adipisicing elit. 
</p>
<div className="input-areas">
    <form>
        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
       <button className="btn-outlne-dark">Subscribe</button>
    </form>
</div>

      </section>
    </div>
  )
}

export default Footer;
