import React from 'react';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='message-index'>
        <div id='message-list'></div>
        <form id='message-form'>
          <div id='message-form-inner'></div>
        </form>
      </div>
    )
  }
}

export default MessageIndex;