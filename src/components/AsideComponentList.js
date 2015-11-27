'use strict';

import React from 'react';

require('styles/Aside.scss');

class AsideComponentList extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search movies..." />
      </div>
    );
  }
}

AsideComponentList.displayName = 'AsideComponentList';

// Uncomment properties you need
// AsideComponentList.propTypes = {};
// AsideComponentList.defaultProps = {};

export default AsideComponentList;
