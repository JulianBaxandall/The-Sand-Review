class Vote < ApplicationRecord
    validates :value, numericality: {only_integer:true, in:(-1 ... 1)}
    validates :user_id, presence:true
    validates :review_id, presence:true

    belongs_to :user
    belongs_to :review
end