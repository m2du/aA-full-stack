import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {hideCreateChannel} from '../../../actions/ui_actions';
import {createChannel} from '../../../actions/channel_actions';
import CreateChannelModal from './create_channel_modal';

const msp = (state, ownProps) => ({
  guild: state.entities.guilds[ownProps.match.params.guildId]
});

const mdp = dispatch => ({
  hideCreateChannel: () => dispatch(hideCreateChannel()),
  createChannel: (guildId, channel) => dispatch(createChannel(guildId, channel))
});

export default withRouter(connect(msp, mdp)(CreateChannelModal));