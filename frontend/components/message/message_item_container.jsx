import {connect} from 'react-redux';

import MessageItem from './message_item';

const msp = (state, ownProps) => ({
  author: state.entities.users[ownProps.message.authorId]
});

export default connect(msp)(MessageItem);