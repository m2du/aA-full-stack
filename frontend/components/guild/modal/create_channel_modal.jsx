import React from 'react';

class CreateChannelModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(
      this.props.match.params.guildId,
      this.state
    );
    this.props.hideCreateChannel();
  }

  cancel(e) {
    e.preventDefault();
    this.props.hideCreateChannel();
  }

  updateName(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div id='create-channel-modal'>
        <div className='backdrop-dark' onClick={this.cancel}></div>
        <form id='create-channel-form' onSubmit={this.handleSubmit}>
          <header>
            <h2>Create Channel</h2>
          </header>
          <div id='create-channel-body'>
            <h5>Channel Name</h5>
            <input type='text' value={this.state.name} onChange={this.updateName}/>
          </div>
          <div id='create-channel-actionbar'>
            <input id='create-channel-button' type="submit" value='Create Channel'/>
            <button id='create-channel-cancel-button' onClick={this.cancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateChannelModal;