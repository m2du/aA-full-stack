import { combineReducers } from 'redux';
import UserReducer from './users_reducer';
import GuildReducer from './guilds_reducer';

export default combineReducers({
  users: UserReducer,
  guilds: GuildReducer
});