import React from 'react';

import MessageItemContainer from './message_item_container';
import MessageFormContainer from './message_form_container';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId)
      .then(action => console.log(action));

    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          this.props.receiveMessage(data.message);
        },
        speak: function(data) { return this.perform("speak", data); },
      }
    );
  }

  componentDidUpdate(prevProps) {
    this.bottom.current.scrollIntoView();
    if (this.props.channelId && this.props.channelId !== prevProps.channelId) {
      this.props.fetchMessages(this.props.match.params.channelId)
        .then(action => console.log(action));
    }
  }

  render() {
    return (
      <div id='message-index'>
        <div id='message-list'>
          {
            this.props.messages.map(message => (
              <MessageItemContainer key={message.id} message={message} />
            ))
          }
          <div ref={this.bottom}/>
        </div>
        <MessageFormContainer />
      </div>
    )
  }
}

export default MessageIndex;