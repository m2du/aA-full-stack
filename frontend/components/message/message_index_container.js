import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {selectChannelMessages} from '../../reducers/selectors';
import {receiveMessage, fetchMessages} from '../../actions/message_actions';
import MessageIndex from './message_index';

const msp = (state, ownProps) => ({
  messages: selectChannelMessages(state, ownProps.match.params.channelId),
  channelId: ownProps.match.params.channelId
});

const mdp = dispatch => ({
  fetchMessages: channelId => dispatch(fetchMessages(channelId)),
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default withRouter(connect(msp, mdp)(MessageIndex))