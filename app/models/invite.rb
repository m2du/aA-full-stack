# == Schema Information
#
# Table name: invites
#
#  id         :bigint           not null, primary key
#  guild_id   :integer          not null
#  url        :string           not null
#  expired    :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Invite < ApplicationRecord
  validates :guild_id, presence: true
  validates :url, presence: true, uniqueness: true

  after_initialize :ensure_unique_url

  belongs_to :guild

  def ensure_unique_url
    begin
      url = SecureRandom.urlsafe_base64[0...10]
    end while Invite.find_by(url: url)
    self.url = url
  end
end
