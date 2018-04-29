import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './util/serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

import './index.css';

ReactDOM.render(
  <Router>
    <main>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </main>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
