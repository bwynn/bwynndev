// @flow
import React, { Component } from 'react';
import Headline from '../Headline';
import './style.css';

export default class About extends Component<{}> {
  render() {
    return (
      <section className='about'>
        <Headline
          hType='page-title'
          title='About Me'
        />
      </section>
    );
  }
}

