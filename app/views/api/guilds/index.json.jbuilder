json.guilds do
  @guilds.each do |guild|
    json.set! guild.id do
      json.partial! 'api/guilds/guild', guild: guild
    end
  end
end