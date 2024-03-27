import React from 'react';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <div style={{ }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0', borderBottom: '1px solid #ddd' }}>
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </div>
    <div style={{ fontSize: '28px', textAlign: 'center', paddingBottom: '40px' }}>
      Made with GYM
    </div>
  </div>
);

export default Footer;
