import React from 'react';

import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="ui center aligned block header">
        <ScrollToTop />
      </h1>
      <div className="ui center aligned header" style={{color: '#4183c4', fontSize: '1em'}}>
        © {(new Date().getFullYear())}&nbsp;
        <a href="https://amitzaman.com/" target="_blank">Amit Zaman</a>
      </div>
    </div>
  )
}

export default Footer;
