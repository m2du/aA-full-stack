import React from 'react';

import DiscordSVG from '../discord_svg';
import { getUserColor } from '../../utils/user_color_util';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <div className='user-list-item'>
        <div className='user-status-icon'
          style={{ backgroundColor: getUserColor(user.tag) }}>
          <DiscordSVG />
        </div>
        <div className='user-list-name'>{user.username}</div>
      </div>
    );
  }
}

export default UserListItem;