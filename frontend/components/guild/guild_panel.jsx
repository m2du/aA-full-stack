import React from 'react';

import DiscordSVG from '../discord_svg';
import { getUserColor } from '../../utils/user_color_util';
import ChannelIndexContainer from '../channel/channel_index_container';

class GuildPanel extends React.Component {
  constructor(props) {
    super(props);
    this.toggleServerActions = this.toggleServerActions.bind(this);
    this.showActions = false;
    this.guildDropdownClick = this.guildDropdownClick.bind(this);
    this.windowListener = this.windowListener.bind(this);
  }

  render() {
    const { user } = this.props;
    const guildName = (this.props.guild) ? this.props.guild.name : "Home";
    return (
      <div id='guild-panel'>
        <div id='guild-content'>
          <header id='guild-header' onClick={(guildName === 'Home') ? null : this.toggleServerActions}>
            <span>{guildName}</span>
            {
              (guildName === 'Home') ?
                null :
                <i id='server-actions-icon' className="fas fa-angle-down"></i>
            }
          </header>
          <div id='guild-header-dropdown' onClick={this.guildDropdownClick}>
            <div id='guild-invite-item' className='guild-dropdown-option'>
              <img src={window.images.inviteIcon} />
              <label>Invite People</label>
            </div>
            <div id='channel-create-item' className='guild-dropdown-option'>
              <img src={window.images.plusIcon} />
              <label>Create Channel</label>
            </div>
          </div>
          <ChannelIndexContainer />
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
          <i className="fas fa-sign-out-alt" onClick={() => this.props.logout()}></i>
        </div>
      </div>
    )
  }

  windowListener(e) {
    if (e.target.id !== 'guild-header') {
      this.toggleServerActions();
    }
  }

  toggleServerActions() {
    if (this.showActions) {
      document.getElementById('server-actions-icon').classList.remove('fa-rotate-180');
      document.getElementById('guild-header-dropdown').classList.remove('visible');
      window.removeEventListener('click', this.windowListener);
    } else {
      document.getElementById('server-actions-icon').classList.add('fa-rotate-180');
      document.getElementById('guild-header-dropdown').classList.add('visible');
      window.addEventListener('click', this.windowListener);
    }

    this.showActions = !this.showActions;
  }

  guildDropdownClick(e) {
    let eleId = e.target.id;
    if (eleId === 'guild-invite-item') {
      this.props.showInviteModal();
    } else if (eleId === 'channel-create-item') {
      this.props.showCreateChannel();
    }
  }
}

export default GuildPanel;