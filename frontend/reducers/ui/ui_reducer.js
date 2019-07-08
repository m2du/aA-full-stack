import {combineReducers} from 'redux';

import GuildUIReducer from './guild_ui_reducer';

export default combineReducers({
  guild: GuildUIReducer
});