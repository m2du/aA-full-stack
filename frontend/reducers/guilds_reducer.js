import {
  RECEIVE_ALL_GUILDS,
  RECEIVE_GUILD,
  DESTROY_GUILD
} from '../actions/guild_actions';

const guildsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_GUILDS:
      return action.guilds;
    case RECEIVE_GUILD:
      let guild = action.guild.guild;
      return Object.assign({}, state, {[guild.id]: guild});
    case DESTROY_GUILD:
      let newState = Object.assign({}, state);
      delete newState[action.guildId];
      return newState;
    default:
      return state;
  }
}

export default guildsReducer;