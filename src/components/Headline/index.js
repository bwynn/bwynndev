// @flow
import React, { Component } from 'react';
import './style.css';

type Props = {
  hType: string,
  title: string
};

export default class Headline extends Component<Props> {
  static defaultProps = {
    hType: 3,
    title: 'Please Enter a Default Title'
  }

  assignTitle () {
    const {
      hType,
      title
    } = this.props

    switch (hType) {
      case 'main':
        return (
          <h1 className='main-headline'>{title}</h1>
        );
      case 'page-title':
        return (
          <h2 className='page-title'>{title}</h2>
        );
      default:
        return null;
    }
  }
  render () {
    return this.assignTitle()
  }
}
