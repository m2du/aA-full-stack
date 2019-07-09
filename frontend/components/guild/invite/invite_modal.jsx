import React from 'react';

class InviteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.createGuildInvite(this.props.guild.id)
      .then(invite => this.setState({
        url: window.location.origin + '/#/join/' + invite.url
      }));
  }

  render() {
    return (
      <div id='invite-link-modal'>
        <div className='backdrop-dark' onClick={this.props.hideInviteModal}></div>
        <div id='invite-link-container'>
          <header>
            <h2>Invite friends to {this.props.guildName}</h2>
          </header>
          <div id='invite-link-body'>
            <p>Share this link with others to grant access to this server</p>
            <div id='invite-link-main'>
              <input readOnly id='invite-input-field' value={this.state.url}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InviteModal;