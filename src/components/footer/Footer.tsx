import React from 'react';

import PLogo from '../../media/images/p-logo2.png';
import './style.css';


function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='footer-left-info'>
          <img src={PLogo} alt='Logo' />
          <p> Developed & Designed by <br/><strong>NeighborDev CR </strong>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;