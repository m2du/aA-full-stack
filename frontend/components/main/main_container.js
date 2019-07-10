import {connect} from 'react-redux';

import {logout} from '../../actions/session_actions';
import {hideAddGuild} from '../../actions/ui_actions';
import Main from './main';

const msp = state => ({
  user: state.entities.users[state.session.id],
  addGuild: state.ui.guild.addGuild,
  showInvite: state.ui.invite.showInvite,
  createChannel: state.ui.channel.createChannel
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  hideAddGuild: () => dispatch(hideAddGuild())
});

export default connect(msp, mdp)(Main);