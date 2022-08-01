class Review < ApplicationRecord
    validates :title,    presence: true
    validates :body,    presence: true
    validates :rating,   presence: true, inclusion: {in: 1..5}
    validates :votes,     presence: true

   belongs_to :beach
end