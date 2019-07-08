import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {createGuild} from '../../../actions/guild_actions';
import {hideAddGuild} from '../../../actions/ui_actions';
import CreateGuildOption from './create_guild_option';

const mdp = dispatch => ({
  createGuild: guild => dispatch(createGuild(guild)),
  hideAddGuild: () => dispatch(hideAddGuild())
});

export default withRouter(connect(null, mdp)(CreateGuildOption));