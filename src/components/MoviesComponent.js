'use strict';

import React from 'react';

require('styles/Movies.scss');

import MovieStore from '../stores/app-store';
import AppActions from '../actions/app-actions';

import MovieComponent from './MovieComponent';

class MoviesComponent extends React.Component {

  constructor() {
    super()
    this.state =  MovieStore.getList();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppActions.getMovies();
  }

  componentWillMount() {
    MovieStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    MovieStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(MovieStore.getList());
  }

// http://image.tmdb.org/t/p/w1000/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
  render() {
    console.log('state', this.state);
    let movies = this.state.movies.results.map( movie => {
      return  <li className="movie">
              <MovieComponent background={movie.poster_path}/>
            </li>
    });
    return (
      <ul className="movies-component">
        { movies }
      </ul>
    );
  }
}

MoviesComponent.displayName = 'MoviesComponent';

// Uncomment properties you need
// MoviesComponent.propTypes = {};
// MoviesComponent.defaultProps = {};

export default MoviesComponent;
