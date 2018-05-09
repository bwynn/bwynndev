// @flow
import * as React from 'react';

type Props = {
  link: {},
  children: React.Node,
};

export default class SocialLink extends React.Component<Props> {
  static defaultProps = {
    item: {},
    children: React.Node
  };

  render() {
    const {
      link,
      children
    } = this.props

    return (
      <div>
        <li>
          { children }
        </li>
      </div>
    );
  }
}
