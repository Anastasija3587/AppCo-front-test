import React from 'react';
import svgDesign from '../../materials/svg/svgDesign.svg';
import svgSecure from '../../materials/svg/svgSecure.svg';
import svgRetina from '../../materials/svg/svgRetina.svg';

import './styles.scss';

const List = () => {
  return (
    <ul className="list">
      <li className="item">
        <div className="item-background">
          <img className="item-background_svg" src={svgDesign} alt="svg" />
        </div>
        <p className="item-title">Clean Design</p>
        <p className="item-text">
          Increase sales by showing true dynamics of your website.
        </p>
      </li>
      <li className="item">
        <div className="item-background">
          <img className="item-background_svg" src={svgSecure} alt="svg" />
        </div>
        <p className="item-title">Secure Data</p>
        <p className="item-text">
          Build your online store’s trust using Social Proof & Urgency.
        </p>
      </li>
      <li className="item">
        <div className="item-background">
          <img className="item-background_svg" src={svgRetina} alt="svg" />
        </div>
        <p className="item-title">Retina Ready</p>
        <p className="item-text">
          Realize importance of social proof in customer’s purchase decision.
        </p>
      </li>
    </ul>
  );
};

export default List;
