import {
  RECEIVE_DM, RECEIVE_DMS
} from '../actions/dm_actions';

const dmsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DMS:
      return Object.assign({}, action.dms.subs);
    case RECEIVE_DM:
      console.log(action);
      return Object.assign({}, state, {[action.dm.dm.id]: action.dm.dm});
    default:
      return state;
  }
}

export default dmsReducer;