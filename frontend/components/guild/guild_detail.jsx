import React from 'react';

import GuildPanelContainer from './guild_panel_container';
import ChannelDetailContainer from '../channel/channel_detail_container';

class GuildDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let guildId = this.props.match.params.guildId;
    if (guildId === 'home') {
      return;
    } else {
      this.props.fetchGuild(guildId).then(
        action => {
          let firstChannelId = Object.keys(action.guild.channels)[0];
          this.props.history.replace(`/channels/${guildId}/${firstChannelId}`);
        }
      );
    }
  }

  componentDidUpdate(prevProps) {
    let guildId = this.props.match.params.guildId;
    
    if (prevProps.match.params.guildId == guildId) {
      return;
    }

    if (guildId === 'home') {
      return;
    } else {
      this.props.fetchGuild(guildId).then(
        action => {
          let firstChannelId = Object.keys(action.guild.channels)[0];
          this.props.history.replace(`/channels/${guildId}/${firstChannelId}`);
        }
      );
    }
  }

  render() {
    const guildId = this.props.match.params.guildId;
    return (
      <div id='guild-detail-view'>
        <GuildPanelContainer guildId={guildId}/>
        <ChannelDetailContainer />
      </div>
    )
  }
}

export default GuildDetail;