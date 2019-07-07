# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  tag             :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password_digest, :username, :tag, presence: true
  validates :password, length: { minimum: 10, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token, :generate_random_tag

  has_many :owned_guilds, foreign_key: :owner_id, class_name: :Guild
  has_many :memberships
  has_many :guilds, through: :memberships, source: :guild

  has_one_attached :image

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def generate_random_tag
    nums = ('0'..'9').to_a
    tag = ''
    4.times { tag.concat(nums.sample) }
    self.tag = tag
  end
end
