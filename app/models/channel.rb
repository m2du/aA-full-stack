# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  guild_id   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :guild_id, :name, presence: true

  belongs_to :guild

  has_many :messages
end
