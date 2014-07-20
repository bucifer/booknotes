class RemoveCoverImgUrlFieldFromImages < ActiveRecord::Migration
  
  def self.up
  	remove_column :images, :cover_img_url
  end

  def self.down
  	add_column :images, :cover_img_url, :string
  end

end
