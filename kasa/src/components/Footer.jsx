import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src='logo_footer.png' alt='logo' width='80px'/>
        </div>
        <div className='footer_text'>
        © 2020 Kasa All rights reserved
        </div>
    </div>
  )
}

export default Footer;