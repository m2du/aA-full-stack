import React from 'react';
import moment from 'moment';

import DiscordSVG from '../discord_svg';
import {getUserColor} from '../../utils/user_color_util';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {author, message} = this.props;
    return (
      <div className='message-item'>
        <header className='message-header'>
          <div className='message-author-icon'
            style={{ backgroundColor: getUserColor(author.tag) }}>
            <DiscordSVG />
          </div>
          <h2 className='message-author'>
            <span>{author.username}</span>
            <time dateTime={message.createdAt}>
              {moment(message.createdAt).calendar()}
            </time>
          </h2>
        </header>
        <p className='message-body'>
          {message.body}
        </p>
        <hr></hr>
      </div>
    );
  }
}

export default MessageItem;