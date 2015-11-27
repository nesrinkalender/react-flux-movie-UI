require('normalize.css');
require('styles/App.scss');

import React from 'react';
import AsideComponent from './AsideComponent';
import FilterBarComponent from './FilterBarComponent';
import MoviesComponent from './MoviesComponent';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <AsideComponent/>
        <div className="main-view">
          <FilterBarComponent/>
          <MoviesComponent/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
