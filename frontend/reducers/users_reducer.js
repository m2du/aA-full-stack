import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_GUILD } from '../actions/guild_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_GUILD:
      return Object.assign({}, state, action.guild.users);
    default:
      return state;
  }
}

export default usersReducer;