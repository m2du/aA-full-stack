import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import ChannelDetail from './channel_detail';

const msp = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId]
});

export default withRouter(connect(msp)(ChannelDetail));