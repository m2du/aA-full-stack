import React from 'react';

import {joinGuild} from '../../../utils/invite_api_util';
import ModalActionBar from './modal_action_bar';

class JoinGuildOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
  }

  updateUrl(e) {
    this.setState({url: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let inviteIdx = this.state.url.lastIndexOf('/');
    let invite = (inviteIdx == -1) ? url : this.state.url.slice(inviteIdx + 1);

    joinGuild(invite)
      .then(guild => {
        this.props.hideAddGuild();
        this.props.history.push(`/channels/${guild.guild.id}`);
      });
  }

  render() {
    return (
      <div id='join-guild-option' className='add-guild-component hide-right'>
        <form id='join-guild-form' onSubmit={this.handleSubmit}>
          <div id='join-guild-form-content'>
            <h5>Join a Server</h5>
            <p id='invite-info'>
              Enter an Instant Invite below to join an existing server.
              The invite will look something like this:
            </p>
            <p id='invite-examples'>
              https://aa-disboard.herokuapp.com/#/join/blU6roWcWqSrJq3tJLlLhQ
            </p>
            <div id='join-link-input-wrapper'>
              <input id='join-link-input' type="text" onChange={this.updateUrl}/>
              <label>Enter an Instant Invite</label>
            </div>
          </div>
          <ModalActionBar buttonText={'Join'} />
        </form>
      </div>
    )
  }
}

export default JoinGuildOption;