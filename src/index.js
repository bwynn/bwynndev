import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <main>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </main>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
