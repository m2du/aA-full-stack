import React from 'react';

import MessageIndex from '../message/message_index';
import UserIndexContainer from '../user/user_index_container';

class ChannelPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='channel-panel'>
        <MessageIndex />
        <UserIndexContainer />
      </div>
    )
  }
}

export default ChannelPanel;