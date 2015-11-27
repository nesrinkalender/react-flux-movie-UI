'use strict';

import React from 'react';
import AsideComponentList from './AsideComponentList';

require('styles/Aside.scss');

class AsideComponent extends React.Component {
  render() {
    return (
      <nav className="aside-component">
        <AsideComponentList/>
        <ul className="menu">
          <span className="title-seperator">
            Menu
          </span>
          <li className="item">
            <span></span>
            Playing
          </li>
          <li className="item">
            <span></span>
            Discover
          </li>
          <li className="item">
            <span></span>
            Activity
          </li>
          <li className="item">
            <span></span>
            Top Charts
          </li>
        </ul>
      </nav>
    );
  }
}

AsideComponent.displayName = 'AsideComponent';

// Uncomment properties you need
// AsideComponent.propTypes = {};
// AsideComponent.defaultProps = {};

export default AsideComponent;
