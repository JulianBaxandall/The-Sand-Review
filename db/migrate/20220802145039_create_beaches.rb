class CreateBeaches < ActiveRecord::Migration[5.2]
  def change
    create_table :beaches do |t|
      t.string :name, null: false
      t.string :town, null: false
      t.string :state, null: false
      t.text :description, null: false
      t.text :url 
      t.text :image
      t.timestamp null: false
    end
  end
end
