import AppConstants from '../constants/app-constants';
import {
  dispatch
}
from '../dispatchers/app-dispatcher';
import api from '../utils/MoviesAPI';

export default {
  getMovies () {
    api.get('http://api.themoviedb.org/3/movie/now_playing').then(function(json) {
      console.log('app-acitons.js GET MOVIES', json);
      dispatch({
        actionType: AppConstants.GET_MOVIES,
        data: json
      });
    });
  },


}
