class CreateReviewsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews_tables do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :votes
      t.belongs_to :beach, null: false
    end
  end
end
