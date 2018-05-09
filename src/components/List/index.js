// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
};

export default class FeaturedList extends React.Component<Props> {
  static defaultProps = {
    children: React.Node
  };

  render() {
    const {
      children
    } = this.props

    return (
      <ul>
        { children }
      </ul>
    );
  }
}
