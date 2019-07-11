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
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  render() {
    return (
      <div id='message-index'>
        <div id='message-list'>
          {
            this.state.messages.map(message => (
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