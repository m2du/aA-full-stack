import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import GuildPanel from './guild_panel';

const msp = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  guild: state.entities.guilds[ownProps.guildId]
});

const mdp = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(GuildPanel);