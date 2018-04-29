import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Brian Wynn</h1>
        </header>
        <p>
          <Link to={'/about'}>About</Link>
        </p>
      </div>
    );
  }
}
