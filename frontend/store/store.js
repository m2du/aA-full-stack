import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';
import ReduxThunk from 'redux-thunk';

export default (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(ReduxThunk, logger))
);