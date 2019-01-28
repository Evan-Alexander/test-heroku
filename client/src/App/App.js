import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
      </Switch>
    );
  }
}

export default App;