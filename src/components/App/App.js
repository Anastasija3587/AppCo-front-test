import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Users from '../../pages/Users/Users';
import Statistics from '../../pages/Statistics/Statistics';
import './styles.scss';

const App = () => {
  return (
    <div className="mainContainer">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users/:id" component={Statistics} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
};

export default App;
