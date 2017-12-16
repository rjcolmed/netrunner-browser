class List < ApplicationRecord
  has_many :favorites
  has_many :cards, through: :favorites
end