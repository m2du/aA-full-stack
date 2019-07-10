import {
  SHOW_CREATE_CHANNEL,
  HIDE_CREATE_CHANNEL
} from '../../actions/ui_actions';

const ChannelUIReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_CREATE_CHANNEL:
      return Object.assign({}, state, { createChannel: true });
    case HIDE_CREATE_CHANNEL:
      const newState = Object.assign({}, state);
      delete newState.createChannel;
      return newState;
    default:
      return state;
  }
}

export default ChannelUIReducer;