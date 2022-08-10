class AddUserToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :user, :string
  end
end
