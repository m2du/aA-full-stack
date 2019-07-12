import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {selectGuildChannels, selectDMs} from '../../reducers/selectors';
import ChannelIndex from './channel_index';

const msp = (state, ownProps) => ({
  channels: selectGuildChannels(state, ownProps.match.params.guildId),
  dms: selectDMs(state)
});

export default withRouter(connect(msp)(ChannelIndex));