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
          (!this.props.match.params.channelId && this.props.match.params.guildId === 'home') ?
            <div id='home-empty'>
              <div id='home-empty-content'>
                <img src={window.images.wumpus} />
                <p>Select a server to start chatting!</p>
              </div>
            </div> :
            <MessageIndexContainer />
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