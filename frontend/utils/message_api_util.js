export const fetchMessages = channelId => (
  $.ajax({
    method: 'get',
    url: `api/channels/${channelId}/messages`
  })
);