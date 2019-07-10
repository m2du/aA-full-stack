import * as ChannelApiUtil from '../utils/channel_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});


export const createChannel = (guildId, channel) => dispatch => (
  ChannelApiUtil.createChannel(guildId, channel).then(
    channel => dispatch(receiveChannel(channel))
  )
);