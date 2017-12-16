class Favorite < ApplicationRecord
  belongs_to :card
  belongs_to :list
end