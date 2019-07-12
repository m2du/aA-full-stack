export const selectGuildMembers = (state, guildId) => {
  let members = [];

  Object.values(state.entities.memberships).forEach(membership => {
    if (membership.guildId === parseInt(guildId)) {
      members.push(state.entities.users[membership.userId]);
    }
  });

  members.sort((a, b) => {
    if (a.username < b.username) {
      return -1;
    } else if (a.username > b.username) {
      return 1;
    } else {
      return 0;
    }
  });

  return members;
};

export const selectGuildChannels = (state, guildId) => {
  let channels = [];
  if (guildId === 'home') {
    channels = selectDMs(state).map(dm => ({
      id: dm.channelId,
      guildId: 'home',
      name: dm.user.username,
      tag: dm.user.tag
    }));
  } else {
    Object.values(state.entities.channels).forEach(channel => {
      if (channel.guildId === parseInt(guildId)) {
        channels.push(channel);
      }
    });
  }

  return channels;
}

export const selectChannelMessages = (state, channelId) => {
  let messages = [];
  Object.values(state.entities.messages).forEach(message => {
    if (message.channelId === parseInt(channelId)) {
      messages.push(message);
    }
  });

  return messages;
}

export const selectDMs = state => {
  let dms = Object.values(state.entities.dms);
  return dms.map(dm => ({
    channelId: dm.channelId,
    user: state.entities.users[dm.userId]
  }));
}