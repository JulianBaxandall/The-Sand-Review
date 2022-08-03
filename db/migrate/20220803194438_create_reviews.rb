class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null:false
      t.integer :rating, null:false
      t.string :text, null:false
      
      t.belongs_to :user
      t.belongs_to :beach      
      t.timestamps null:false
    end
  end
end
