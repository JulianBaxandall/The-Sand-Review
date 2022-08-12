class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :title, :text, :rating, :current_user, :votes

    has_many :votes
  end