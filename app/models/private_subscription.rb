# == Schema Information
#
# Table name: private_subscriptions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PrivateSubscription < ApplicationRecord
  validates :user_id, :channel_id, presence: true

  belongs_to :user
  belongs_to :channel

  def self.dm_exists?(user1, user2)
    subs = PrivateSubscription.joins("JOIN private_subscriptions AS other ON other.channel_id=private_subscriptions.channel_id")
      .where(["private_subscriptions.user_id = ? AND other.user_id = ?", user1, user2])
      .select("private_subscriptions.id, private_subscriptions.channel_id, other.user_id AS to").distinct

    subs.empty? ? nil : subs.first
  end
end
