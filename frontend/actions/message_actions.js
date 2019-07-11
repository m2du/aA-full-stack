import * as MessageApiUtil from '../utils/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessages = channelId => dispatch => (
  MessageApiUtil.fetchMessages(channelId).then(
    messages => dispatch(receiveMessages(messages))
  )
);