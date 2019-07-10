json.guild do
  json.partial! 'api/guilds/guild', guild: @guild
end

json.users do
  json.partial! 'api/users/index', users: @guild.users
end

json.memberships do
  json.partial! 'api/memberships/index', memberships: @guild.memberships
end

json.channels do
  json.partial! 'api/channels/index', channels: @guild.channels
end