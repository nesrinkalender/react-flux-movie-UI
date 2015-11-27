'use strict';

import React from 'react';

require('styles/Movie.scss');

class MovieComponent extends React.Component {

  render() {
    return (
      <div className="movie-component" style={{backgroundImage: 'url(http://image.tmdb.org/t/p/w1000/' + this.props.background + ')'}}>

      </div>
    );
  }
}

MovieComponent.displayName = 'MovieComponent';

// Uncomment properties you need
// MovieComponent.propTypes = {};
// MovieComponent.defaultProps = {};

export default MovieComponent;
