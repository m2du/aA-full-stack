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
    if (this.props.match.params.channelId) {
      this.props.fetchMessages(this.props.match.params.channelId);
    }

    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          this.props.receiveMessage(data.message);
        },
        speak: function (data) { return this.perform("speak", data); },
      }
    );
  }

  componentDidUpdate(prevProps) {
    this.bottom.current.scrollIntoView();
    if (this.props.channelId && this.props.channelId !== prevProps.channelId) {
      this.props.fetchMessages(this.props.match.params.channelId);
    }
  }

  render() {
    const messages = this.props.messages;
    return (
      <div id='message-index'>
        <div id='message-spacer' />
        <div id='message-list'>
          {
            messages.map((message, idx) => {
              return (<MessageItemContainer key={message.id}
                prevMessage={messages[idx - 1]}
                message={message}
                nextMessage={messages[idx + 1]} />);
            })
          }
          <div ref={this.bottom} />
        </div>
        <MessageFormContainer />
      </div>
    )
  }
}

export default MessageIndex;