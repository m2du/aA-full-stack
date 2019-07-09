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

require 'test_helper'

class InviteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
