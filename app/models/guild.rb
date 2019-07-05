# == Schema Information
#
# Table name: guilds
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Guild < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :owner_id, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :memberships

  has_many :users,
    through: :memberships,
    source: :user
end
