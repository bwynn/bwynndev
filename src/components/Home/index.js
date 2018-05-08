import React, { Component } from 'react';
import Headline from '../Headline';
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <section className='home'>
        <Headline
          title='Welcome to bwynn.io'
          hType='page-title'
        />
      </section>
    );
  }
}
