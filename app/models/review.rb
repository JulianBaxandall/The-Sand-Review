class Review < ApplicationRecord
    validates :title, presence: true
    validates :rating, presence: true
    validates :text, presence: true
end