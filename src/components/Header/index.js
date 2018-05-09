// @flow
import * as React from 'react';
import './style.css';

type Props = {
  children?: React.Node, // not necessary to render
};

export default class Header extends React.Component<Props> {
  render () {
    return (
      <header className='header'>
        {this.props.children}
      </header>
    );
  }
}
