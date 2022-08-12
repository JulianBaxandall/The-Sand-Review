class VoteSerializer < ActiveModel::Serializer
    attributes :value, :user_id, :review_id
end