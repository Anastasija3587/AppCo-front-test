import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/index';
import Users from '../../pages/Users/index';
import Statistics from '../../pages/Statistics/index';
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
