import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Dashboard from '../Dashboard';
import Input from '../Input';
import Biodata from '../Biodata';
import {Provider} from 'react-redux';
import {store} from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/Input" exact component={Input} />
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/Biodata" exact component={Biodata} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
      </div>
    </Router>
    </Provider>
    );
}

export default App;
