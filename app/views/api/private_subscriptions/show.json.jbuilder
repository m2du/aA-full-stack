json.dm do
  json.partial! 'api/private_subscriptions/dm', dm: @sub
end

json.channel do
  json.partial! 'api/channels/channel', channel: @sub.channel
end