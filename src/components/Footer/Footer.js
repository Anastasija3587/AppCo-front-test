import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="wrap">
      <div className="form">
        <input className="input" type="email" placeholder="Enter your email" />
        <button className="button" type="submit">
          Subscribe
        </button>
      </div>
      <div className="foot">
        <p className="foot-logo">AppCo</p>
        <p className="foot-notice">All rights reserved by ThemeTags</p>
        <p className="foot-notice">Copyrights © 2019.</p>
      </div>
    </footer>
  );
};

export default Footer;
