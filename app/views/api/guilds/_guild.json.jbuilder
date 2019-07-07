json.extract! guild, :id, :name, :owner_id
json.image_url url_for(guild.image) if guild.image.attached?