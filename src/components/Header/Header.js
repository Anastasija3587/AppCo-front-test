import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import iphone from '../../materials/svg/iphone.svg';

const Header = () => {
  return (
    <header className="header">
      <div>
        <p className="logo">AppCo</p>
        <h1 className="title">
          <span className="span">Brainstorming </span>for desired perfect
          Usability
        </h1>
        <p className="description">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <button className="btn" type="button">
          <NavLink className="btn-link" to="/users">
            Views Stats
          </NavLink>
        </button>
      </div>
      <div>
        <img className="iphone" alt="iphone" src={iphone} width="400" />
      </div>
    </header>
  );
};

export default Header;
