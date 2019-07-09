export const createGuildInvite = guildId => (
  $.ajax({
    method: 'post',
    url: `api/guilds/${guildId}/invites`
  })
);

export const joinGuild = url => (
  $.ajax({
    method: 'get',
    url: `api/invites/${url}`
  })
);