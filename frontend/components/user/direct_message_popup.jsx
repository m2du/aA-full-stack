import React from 'react'

import {getUserColor} from '../../utils/user_color_util';
import DiscordSVG from '../discord_svg';

class DirectMessagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.updateMessage = this.updateMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.hide);
    document.getElementById('user-popup-input').focus();
  }

  componentDidUpdate() {
    document.getElementById('user-popup-input').focus();
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hide);
  }

  hide(e) {
    if (!e.target.classList.contains('user-list-item') && e.target.id !== 'user-popup-input') {
      this.props.hideDMPopup();
    }
  }

  updateMessage(e) {
    this.setState({message: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state.message;
    if (message) {
      this.props.hideDMPopup();
    }
  }

  render() {
    const user = this.props.user;
    return (
      <div id='dm-background'>
        <div id='direct-message-popup'>
          <header id='user-popup-header'>
            <div id='user-popup-icon'
              style={{ backgroundColor: getUserColor(user.tag) }}>
              <DiscordSVG />
            </div>
            <div id='user-popup-nametag'>
              <span className='name'>{user.username}</span>
              <span className='tag'>#{user.tag}</span>
            </div>
          </header>
          <form id='user-popup-form' onSubmit={this.handleSubmit}>
            <input id='user-popup-input' type="text" placeholder={`Message @${user.username}`}
              value={this.state.message} onChange={this.updateMessage} autoComplete='off'/>
          </form>
        </div>
      </div>
    );
  }
}

export default DirectMessagePopup;