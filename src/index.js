import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './util/serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Headline from './components/Headline';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

import './index.css';

ReactDOM.render(
  <Router>
    <div className='app'>
      <Header>
        <Headline title='Brian Wynn' hType='main' />
      </Header>
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </main>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
