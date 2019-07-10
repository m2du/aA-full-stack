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
  Object.values(state.entities.channels).forEach(channel => {
    if (channel.guildId === parseInt(guildId)) {
      channels.push(channel);
    }
  });

  return channels;
}