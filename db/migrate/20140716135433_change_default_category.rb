class ChangeDefaultCategory < ActiveRecord::Migration
  def change
  	change_column :categories, :name, :string, :default => "Misc.", :null => false 
  end
end
