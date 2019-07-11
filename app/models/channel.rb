# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  guild_id   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  private    :boolean          default(FALSE)
#

class Channel < ApplicationRecord
  validates :guild_id, :name, presence: true

  belongs_to :guild

  has_many :messages
  has_many :private_subscriptions
end
