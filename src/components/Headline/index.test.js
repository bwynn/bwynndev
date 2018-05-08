import React from 'react';
import ReactDOM from 'react-dom';
import Headline from './index';

it('renders without crashing', () => {
  const headline = document.createElement('h1');
  ReactDOM.render(<Headline />, headline);
  ReactDOM.unmountComponentAtNode(headline);
})
