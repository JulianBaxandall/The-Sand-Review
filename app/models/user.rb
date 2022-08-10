class User < ApplicationRecord
  mount_uploader :profile_photo, ProfilePhotoUploader
  
  def admin?
    role == "admin"
  end
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :reviews
end
