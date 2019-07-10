import {combineReducers} from 'redux';

import GuildUIReducer from './guild_ui_reducer';
import InviteUIReducer from './invite_ui_reducer';
import ChannelUIReducer from './channel_ui_reducer';

export default combineReducers({
  guild: GuildUIReducer,
  invite: InviteUIReducer,
  channel: ChannelUIReducer
});