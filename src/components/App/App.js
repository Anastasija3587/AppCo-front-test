import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Users from '../../pages/Users/Users';
import Statistics from '../../pages/Statistics/Statistics';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/users/:id" component={Statistics} />
      </Switch>
    </div>
  );
};

export default App;
