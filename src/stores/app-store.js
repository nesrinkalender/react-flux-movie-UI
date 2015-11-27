// Requiring the Dispatcher, Constants, and
// event emitter dependencies
import {register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import ObjectAssign from 'object-assign';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _store = {movies: {results:[]}};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
var MovieStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList: function() {
    return _store;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
register(function(payload) {

  var action = payload;

  switch(action.actionType) {

    case AppConstants.GET_MOVIES:

      console.log('app-store.js action', action);
      // Add the new todo to the list
      _store.movies = action.data;
      MovieStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = MovieStore;
