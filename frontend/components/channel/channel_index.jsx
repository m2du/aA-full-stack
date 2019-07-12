import React from 'react';

import ChannelListItem from './channel_list_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  homeChannelMapping(dm) {
    return {
      id: dm.channelId,
      guildId: 'home',
      name: dm.user.username,
      tag: dm.user.tag
    }
  }

  render() {
    console.log(this.props.channels);
    return (
      <div id='channel-list-container'>
        {
          (this.props.match.params.guildId === 'home') ?
            this.props.dms.map(dm => (
              <ChannelListItem key={dm.channelId} channel={this.homeChannelMapping(dm)} />
            )) :
            this.props.channels.map((channel) => (
              <ChannelListItem key={channel.id} channel={channel} />
            ))}
      </div>
    );
  }
}

export default ChannelIndex;