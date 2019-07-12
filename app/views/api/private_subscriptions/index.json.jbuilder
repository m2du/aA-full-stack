json.subs do
  @subs.each do |sub|
    json.set! sub.id do
      json.partial! 'api/private_subscriptions/dm', dm: sub
    end
  end
end

json.channels do
  @subs.each do |sub|
    json.set! sub.channel.id do
      json.partial! 'api/channels/channel', channel: sub.channel
    end
  end
end

json.users do
  @subs.each do |sub|
    json.set! sub.user.id do
      json.partial! 'api/users/user', user: sub.user
    end
  end
end