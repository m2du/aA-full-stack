class Message < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true

  belongs_to :channel
  belongs_to :author, 
    class_name: :User
  
end
