import React from 'react';
import moment from 'moment';

import DiscordSVG from '../discord_svg';
import { getUserColor } from '../../utils/user_color_util';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { author, message, prevMessage, nextMessage } = this.props;
    const displayCompact = prevMessage &&
      message.authorId === prevMessage.authorId;
    const displayLine = !nextMessage ||
      message.authorId != nextMessage.authorId;
    
    if (!author) return (<div></div>)

    return (
      <div className='message-item'>
        {
          (displayCompact) ?
            <p className='message-body'>{message.body}</p> :
            <div className='message-item-padded'>
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
              <p className='message-body'>{message.body}</p>
            </div>
        }
        {
          (displayLine) ? <hr className='message-break'></hr> : null
        }
      </div>
    );
  }
}

export default MessageItem;