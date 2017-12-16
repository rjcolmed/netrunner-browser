class Card < ApplicationRecord
  has_many :favorites
  has_many :lists, through: :favorites
end
