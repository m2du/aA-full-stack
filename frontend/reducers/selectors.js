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
}