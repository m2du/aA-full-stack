import React from 'react';

import GuildPanel from './guild_panel';
import ChannelDetail from '../channel/channel_detail';

class GuildDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='guild-detail-view'>
        <GuildPanel />
        <ChannelDetail />
      </div>
    )
  }
}

export default GuildDetail;