class AddDefaultCategoryId < ActiveRecord::Migration
  def change
	change_column :books, :category_id, :integer, :default => 1, :null => false 
  end
end
