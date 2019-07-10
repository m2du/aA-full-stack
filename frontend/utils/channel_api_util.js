export const createChannel = (guildId, channel) => (
  $.ajax({
    method: 'post',
    url: `api/guilds/${guildId}/channels`,
    data: {channel}
  })
);