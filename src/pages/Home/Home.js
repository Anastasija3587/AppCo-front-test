import React from 'react';
import Header from '../../components/Header/index';
import Main from '../../components/Main/index';
import Footer from '../../components/Footer/index';
import './styles.scss';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
