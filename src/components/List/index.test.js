import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedList from './index'

it('renders without crashing()', () => {
  const ul = document.createElement('ul');
  ReactDOM.render(<FeaturedList />, ul);
  ReactDOM.unmountComponentAtNode(ul);
});
