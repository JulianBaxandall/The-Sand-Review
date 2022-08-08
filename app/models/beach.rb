class Beach < ApplicationRecord
    validates :name, presence: true
    validates :town, presence: true
    validates :state, presence: true
    validates :description, presence: true
    
    has_many :reviews
end