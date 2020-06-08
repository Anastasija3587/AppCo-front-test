import React from 'react';
import List from '../List/index';
import './styles.scss';

const Main = () => {
  return (
    <main className="wrapper">
      <h2 className="wrapper-title">
        Why <span className="span">small business owners love</span> AppCo?
      </h2>
      <p className="description">
        Our design projects are fresh and simple and will benefit your business
        greatly. Learn more about our work!
      </p>
      <List />
    </main>
  );
};

export default Main;
