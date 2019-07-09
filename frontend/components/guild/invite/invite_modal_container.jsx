import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { hideInviteModal } from '../../../actions/ui_actions';
import {createGuildInvite} from '../../../utils/invite_api_util';
import InviteModal from './invite_modal';

const msp = (state, ownProps) => ({
  createGuildInvite,
  guild: state.entities.guilds[ownProps.match.params.guildId]
});

const mdp = dispatch => ({
  hideInviteModal: () => dispatch(hideInviteModal())
})

export default withRouter(connect(msp, mdp)(InviteModal));