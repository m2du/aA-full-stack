import { combineReducers } from 'redux';
import SessionReducer from '../reducers/session_reducer';
import EntitiesReducer from '../reducers/entities_reducer';
import ErrorsReducer from '../reducers/errors_reducer';

export default combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  errors: ErrorsReducer
});