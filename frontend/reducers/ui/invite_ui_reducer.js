import {
  SHOW_INVITE_MODAL,
  HIDE_INVITE_MODAL
} from '../../actions/ui_actions';

const InviteUIReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_INVITE_MODAL:
      return Object.assign({}, state, { showInvite: true });
    case HIDE_INVITE_MODAL:
      const newState = Object.assign({}, state);
      delete newState.showInvite;
      return newState;
    default:
      return state;
  }
}

export default InviteUIReducer;