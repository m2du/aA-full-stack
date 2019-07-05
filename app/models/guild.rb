class Guild < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :owner_id, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
end
