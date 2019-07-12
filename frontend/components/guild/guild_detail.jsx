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
      this.props.fetchDMs();
      if (this.props.channels[0]) {
        const channelId = this.props.channels[0].id;
        this.props.history.replace(`/channels/${guildId}/${channelId}`);
      }
    } else if (this.props.channels.length > 0) {
      const channelId = this.props.channels[0].id;
      this.props.history.replace(`/channels/${guildId}/${channelId}`);
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
      this.props.fetchDMs();
      if (this.props.channels[0]) {
        console.log('hello');
        if (!this.props.match.params.channelId) {
          const channelId = this.props.channels[0].id;
          this.props.history.replace(`/channels/${guildId}/${channelId}`);
        }
      }
    } else if (this.props.channels.length > 0) {
      const channelId = this.props.channels[0].id;
      this.props.history.replace(`/channels/${guildId}/${channelId}`);
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