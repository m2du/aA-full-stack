import {RECEIVE_GUILD} from '../actions/guild_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GUILD:
      return Object.assign({}, state, action.guild.channels);
    default:
      return state;
  }
};

export default channelsReducer;