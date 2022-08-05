class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  def admin?
    role == "admin"
  end
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
