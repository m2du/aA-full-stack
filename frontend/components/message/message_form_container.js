import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import MessageForm from './message_form';

const msp = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId],
  userId: state.session.id
});

export default withRouter(connect(msp)(MessageForm));