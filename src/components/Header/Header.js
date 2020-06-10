import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import iphone from '../../materials/svg/iphone.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapp">
        <p className="header-logo">AppCo</p>
        <h1 className="header-title">
          <span className="span">Brainstorming </span>for desired perfect
          Usability
        </h1>
        <p className="description">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <NavLink className="btn" to="/users">
          Views Stats
        </NavLink>
      </div>
      <div>
        <img className="iphone" alt="iphone" src={iphone} width="400" />
      </div>
    </header>
  );
};

export default Header;
