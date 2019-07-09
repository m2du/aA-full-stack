import { RECEIVE_GUILD } from '../actions/guild_actions';

const membershipsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GUILD:
      return Object.assign({}, state, action.guild.memberships);
    default:
      return state;
  }
}

export default membershipsReducer;