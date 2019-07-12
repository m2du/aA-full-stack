import React from 'react';

import DiscordSVG from '../discord_svg';
import { getUserColor } from '../../utils/user_color_util';

class UserListItem extends React.Component {
  constructor(props) {
    super(props);
    this.showPopup = this.showPopup.bind(this);
  }

  showPopup() {
    this.props.showDMPopup(this.props.user);
  }

  render() {
    const user = this.props.user;
    return (
      <div className='user-list-item' onClick={this.showPopup}>
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