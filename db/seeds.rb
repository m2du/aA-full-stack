# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

  Guild.create!(name: 'Private', owner_id: private_user.id)

  demo_guild = Guild.create!(name: 'Demo', owner_id: demo_user.id)
  Membership.create!(guild_id: demo_guild.id, user_id: demo_user.id)
end