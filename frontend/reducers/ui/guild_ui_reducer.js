import {
  SHOW_ADD_GUILD,
  HIDE_ADD_GUILD
} from '../../actions/ui_actions';

const GuildUIReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_ADD_GUILD:
      return Object.assign({}, state, { addGuild: true });
    case HIDE_ADD_GUILD:
      const newState = Object.assign({}, state);
      delete newState.addGuild;
      return newState;
    default:
      return state;
  }
}

export default GuildUIReducer;