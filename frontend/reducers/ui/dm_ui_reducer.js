import {
  SHOW_DM_POPUP,
  HIDE_DM_POPUP
} from '../../actions/ui_actions';

const DMUIReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_DM_POPUP:
      return Object.assign({}, state, { user: action.user });
    case HIDE_DM_POPUP:
      const newState = Object.assign({}, state);
      delete newState.user;
      return newState;
    default:
      return state;
  }
}

export default DMUIReducer;