import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {hideAddGuild} from '../../../actions/ui_actions';
import JoinGuildOption from './join_guild_option';

const mdp = dispatch => ({
  hideAddGuild: () => dispatch(hideAddGuild())
});

export default withRouter(connect(null, mdp)(JoinGuildOption));