# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
  Guild.destroy_all
  User.destroy_all

  private_user_params = {
    email: 'private@disboard.game',
    username: 'Private',
    password: SecureRandom.urlsafe_base64
  }

  demo_user_params = {
    email: 'demouser@disboard.game',
    username: 'Demo User',
    password: 'letsplayboardgames'
  }

  private_user = User.create!(private_user_params)
  demo_user = User.create!(demo_user_params)
  
  tet_user = User.create!(
    email: 'tet@disboard.game',
    username: 'Tet',
    password: 'playbytherules'
  )
  
  sora_user = User.create!(
    email: 'sora@disboard.game',
    username: 'Sora',
    password: 'handsandfeetgaming'
  )
  
  shiro_user = User.create!(
    email: 'shiro@disboard.game',
    username: 'Shiro',
    password: 'inbrotheritrust'
  )
  
  steph_user = User.create!(
    email: 'steph@disboard.game',
    username: 'Steph',
    password: 'cheatingisunfair'
  )
  
  jibril_user = User.create!(
    email: 'jibril@disboard.game',
    username: 'Jibril',
    password: 'knowledgeisthebest'
  )
  
  fiel_user = User.create!(
    email: 'fiel@disboard.game',
    username: 'Fiel',
    password: 'lookatthemagic'
  )
  
  izuna_user = User.create!(
    email: 'izuna@disboard.game',
    username: 'Izuna',
    password: 'dontlookdownonme'
  )

  Guild.create!(name: 'Private', owner_id: private_user.id)

  demo_guild = Guild.create!(name: 'Demo', owner_id: demo_user.id)
  Channel.create!(guild_id: demo_guild.id, name: 'general')
  Membership.create!(guild_id: demo_guild.id, user_id: demo_user.id)
  Membership.create!(guild_id: demo_guild.id, user_id: tet_user.id)
  Membership.create!(guild_id: demo_guild.id, user_id: sora_user.id)
  Membership.create!(guild_id: demo_guild.id, user_id: shiro_user.id)

  disboard_guild = Guild.create!(name: 'Disboard', owner_id: tet_user.id)
  imageFile = open('https://disboard-seeds.s3-us-west-1.amazonaws.com/disboard_icon.jpg')
  disboard_guild.image.attach(io: imageFile, filename: 'disboard_icon.jpg')
  Channel.create!(guild_id: disboard_guild.id, name: 'general')
  Membership.create!(guild_id: disboard_guild.id, user_id: tet_user.id)
  Membership.create!(guild_id: disboard_guild.id, user_id: sora_user.id)
  Membership.create!(guild_id: disboard_guild.id, user_id: shiro_user.id)
  Membership.create!(guild_id: disboard_guild.id, user_id: steph_user.id)
  Membership.create!(guild_id: disboard_guild.id, user_id: jibril_user.id)
  Membership.create!(guild_id: disboard_guild.id, user_id: fiel_user.id)
  Membership.create!(guild_id: disboard_guild.id, user_id: izuna_user.id)
  Membership.create!(guild_id: disboard_guild.id, user_id: demo_user.id)
end