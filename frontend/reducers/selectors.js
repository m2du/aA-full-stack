export const selectGuildMembers = (state, guildId) => {
  let members = [];
  
  Object.values(state.entities.memberships).forEach(membership => {
    if (membership.guildId === parseInt(guildId)) {
      members.push(state.entities.users[membership.userId]);
    }
  });

  return members;
}