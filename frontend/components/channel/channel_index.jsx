import React from 'react';

import ChannelListItem from './channel_list_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='channel-list-container'>
        {this.props.channels.map((channel) => (
          <ChannelListItem key={channel.id} channel={channel} />
        ))}
      </div>
    );
  }
}

export default ChannelIndex;