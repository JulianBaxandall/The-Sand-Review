class BeachSerializer < ActiveModel::Serializer
  # what we put with attributes determines what properties of a beach we want to include
  attributes :id, :name, :town, :state, :description, :url, :image, :current_user

  has_many :reviews 
  # if you have a reviewserializer, it will automagically get used for line 5
end
