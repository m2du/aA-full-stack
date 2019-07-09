import { connect } from 'react-redux';

import { showInviteModal } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import GuildPanel from './guild_panel';

const msp = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  guild: state.entities.guilds[ownProps.guildId]
});

const mdp = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  showInviteModal: () => dispatch(showInviteModal())
});

export default connect(msp, mdp)(GuildPanel);