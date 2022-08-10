class BeachSerializer < ActiveModel::Serializer
  attributes :id, :name, :town, :state, :description, :url, :image, :current_user

  has_many :reviews do 
    object.reviews.order(:updated_at).reverse
  end
end
