class ChangeAuthorImageColumnName < ActiveRecord::Migration
  def change
  	rename_column :images, :author_image_url, :author_img_url
  end
end
