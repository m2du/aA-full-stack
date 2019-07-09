export const fetchAllGuilds = () => (
  $.ajax({
    method: 'get',
    url: 'api/guilds',
  })
);

export const fetchGuild = id => (
  $.ajax({
    method: 'get',
    url: `api/guilds/${id}`
  })
);

export const createGuild = guild => (
  $.ajax({
    method: 'post',
    url: 'api/guilds',
    data: guild,
    contentType: false,
    processData: false
  })
);

export const updateGuild = guild => (
  $.ajax({
    method: 'patch',
    url: `api/guilds/${guild.id}`,
    data: {guild}
  })
);

export const destroyGuild = id => (
  $.ajax({
    method: 'delete',
    url: `api/guilds/${id}`
  })
);

export const fetchGuildMembers = guildId => (
  $.ajax({
    method: 'get',
    url: `api/guilds/${guildId}/users`
  })
)