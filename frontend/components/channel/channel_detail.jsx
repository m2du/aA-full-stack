import React from 'react';

import ChannelPanel from './channel_panel';

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='channel-detail-view'>
        <header id='channel-header'></header>
        <ChannelPanel />
      </div>
    );
  }
}

export default ChannelDetail;