import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors/errors_reducer';
import UIReducer from './ui/ui_reducer';

export default combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  errors: ErrorsReducer,
  ui: UIReducer
});