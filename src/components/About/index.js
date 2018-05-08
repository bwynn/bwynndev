import React, { Component } from 'react';
import Headline from '../Headline'

export default class About extends Component {
  render () {
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
