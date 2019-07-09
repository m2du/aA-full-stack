import React from 'react';

import GuildPanelContainer from './guild_panel_container';
import ChannelDetail from '../channel/channel_detail';

class GuildDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const guildId = this.props.match.params.guildId;
    return (
      <div id='guild-detail-view'>
        <GuildPanelContainer guildId={guildId}/>
        <ChannelDetail />
      </div>
    )
  }
}

export default GuildDetail;