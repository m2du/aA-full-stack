# == Schema Information
#
# Table name: memberships
#
#  id         :bigint           not null, primary key
#  guild_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :guild_id, :user_id, presence: true

  belongs_to :user
  belongs_to :guild
end
