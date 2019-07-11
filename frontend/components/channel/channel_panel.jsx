import React from 'react';

import MessageIndexContainer from '../message/message_index_container';
import UserIndexContainer from '../user/user_index_container';

class ChannelPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='channel-panel'>
        <MessageIndexContainer />
        <UserIndexContainer />
      </div>
    )
  }
}

export default ChannelPanel;