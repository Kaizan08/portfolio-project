import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio';
import About from './components/About';

ReactDOM.render(
<BrowserRouter>
<BaseLayout>
<Switch>
    <Route path='/portfolio' component={Portfolio}/>
    <Route path='/about' component={About}/>
    <Route path='/home' component={Home}/>
    <Route path='/' component={App}/>
</Switch>
</BaseLayout>
</BrowserRouter>
, document.getElementById('App'));
registerServiceWorker();
