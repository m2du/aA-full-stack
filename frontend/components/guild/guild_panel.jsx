import React from 'react';

import DiscordSVG from '../discord_svg';
import { getUserColor } from '../../utils/user_color_util';

class GuildPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    const guildName = (this.props.guild) ? this.props.guild.name : "Home";
    return (
      <div id='guild-panel'>
        <div id='guild-content'>
          <header id='guild-header'>
            <span>{guildName}</span>
            <img onClick={this.props.showInviteModal} src={window.images.inviteIcon} />
          </header>
        </div>
        <div id='user-bar'>
          <div className='user-status-icon'
            style={{ backgroundColor: getUserColor(user.tag) }}>
            <DiscordSVG />
          </div>
          <div id='user-bar-nametag'>
            <p id='user-bar-name'>{user.username}</p>
            <p id='user-bar-tag'>#{user.tag}</p>
          </div>
          <i className="fas fa-power-off" onClick={() => this.props.logout()}></i>
        </div>
      </div>
    )
  }
}

export default GuildPanel;