import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import GuildsReducer from './guilds_reducer';
import MembershipsReducer from './memberships_reducer';

export default combineReducers({
  users: UsersReducer,
  guilds: GuildsReducer,
  memberships: MembershipsReducer
});