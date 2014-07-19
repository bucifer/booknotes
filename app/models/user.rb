class User < ActiveRecord::Base
  authenticates_with_sorcery!
  validates :password, length: { minimum: 3 }, presence: true
  validates :email, uniqueness: true, presence: true

end
