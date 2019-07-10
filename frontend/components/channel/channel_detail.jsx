import React from 'react';

import ChannelPanel from './channel_panel';

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const channelName = (this.props.channel) ? this.props.channel.name : '';
    return (
      <div id='channel-detail-view'>
        <header id='channel-header'>{channelName}</header>
        <ChannelPanel />
      </div>
    );
  }
}

export default ChannelDetail;