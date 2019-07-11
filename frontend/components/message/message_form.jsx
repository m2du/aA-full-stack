import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    }

    this.updateMessage = this.updateMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateMessage(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: {
        body: this.state.body,
        channel_id: this.props.match.params.channelId,
        author_id: this.props.userId
      }
    });
    this.setState({body: ''});
  }

  render() {
    return (
      <form id='message-form' onSubmit={this.handleSubmit}>
        <div id='message-form-inner'>
          <input id='send-message-input' type='text' autoComplete='off'
                 value={this.state.body} onChange={this.updateMessage}
                 placeholder={`Message #${(this.props.channel) ? this.props.channel.name : ''}`} />
        </div>
      </form>
    );
  }
}

export default MessageForm;