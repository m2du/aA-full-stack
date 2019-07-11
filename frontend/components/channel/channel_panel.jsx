import React from 'react';
import { withRouter } from 'react-router-dom';

import MessageIndexContainer from '../message/message_index_container';
import UserIndexContainer from '../user/user_index_container';

class ChannelPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='channel-panel'>
        {
          (this.props.match.params.channelId) ?
            <MessageIndexContainer /> :
            <div id='home-empty'>
              <div id='home-empty-content'>
                <img src={window.images.wumpus} />
                <p>Select a server or DM to start chatting!</p>
              </div>
            </div>
        }
        {
          (this.props.match.params.guildId === 'home') ?
            null :
            <UserIndexContainer />}
      </div>
    )
  }
}

export default withRouter(ChannelPanel);