class User < ApplicationRecord
  has_one :list
  has_secure_password
end