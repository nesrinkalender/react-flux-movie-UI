'use strict';

import React from 'react';

require('styles/FilterBar.scss');

class FilterBarComponent extends React.Component {
  render() {
    return (
      <div className="filterbar-component">
        <div className="section title">
          <div className="component">
            <h2>Discover</h2>
          </div>
        </div>

        <div className="section filters">
          <div className="component">
            <ul>
              <li>
                Release Date
              </li>
              <li>
                Popularity
              </li>
            </ul>
          </div>
        </div>
        <div className="section controls"></div>
      </div>
    );
  }
}

FilterBarComponent.displayName = 'FilterBarComponent';

// Uncomment properties you need
// FilterBarComponent.propTypes = {};
// FilterBarComponent.defaultProps = {};

export default FilterBarComponent;
