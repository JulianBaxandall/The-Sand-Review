class Review < ApplicationRecord
    validates :title, presence: true
    validates :rating, presence: true
    validates :text, presence: true

    belongs_to :beach
    has_many :votes
end