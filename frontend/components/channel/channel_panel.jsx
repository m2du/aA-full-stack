import React from 'react';

import MessageIndex from '../message/message_index';
import UserIndex from '../user/user_index';

class ChannelPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='channel-panel'>
        <MessageIndex />
        <UserIndex />
      </div>
    )
  }
}

export default ChannelPanel;